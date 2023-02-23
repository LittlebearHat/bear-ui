import { defineComponent, ref, watch, computed, provide, useSlots, onMounted, openBlock, createElementBlock, normalizeClass, unref, createVNode, withCtx, createBlock } from "vue";
import { treeProps, treeEmitts, treeInjectKey } from "./tree.js";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
import _sfc_main$1 from "./treeNode.vue.js";
import BVirtualList from "../../virtual-list/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tree",
  props: treeProps,
  emits: treeEmitts,
  setup(__props, { emit }) {
    const props = __props;
    defineOptions({
      name: "b-tree"
    });
    const bem = createNamespace("tree");
    const tree = ref([]);
    function createOptions(key, label, children) {
      return {
        getKey(node) {
          return node[key];
        },
        getLabel(node) {
          return node[label];
        },
        getChildren(node) {
          return node[children];
        }
      };
    }
    const TreeOptions = createOptions(
      props.keyField,
      props.labelField,
      props.childrenField
    );
    function createTree(data, parent = null) {
      function traversal(data2, parent2 = null) {
        return data2.map((node) => {
          const children = TreeOptions.getChildren(node) || [];
          const treeNode = {
            key: TreeOptions.getKey(node),
            label: TreeOptions.getLabel(node),
            children: [],
            rawNode: node,
            level: parent2 ? parent2.level + 1 : 0,
            isLeaf: node.isLeaf ?? children.length == 0,
            disabled: !!node.disabled,
            parentKey: parent2 == null ? void 0 : parent2.key
          };
          if (children.length > 0) {
            treeNode.children = traversal(children, treeNode);
          }
          return treeNode;
        });
      }
      const result = traversal(data, parent);
      return result;
    }
    watch(
      () => props.data,
      (data) => {
        tree.value = createTree(data);
      },
      { immediate: true }
    );
    const expandedKeysSet = ref(new Set(props.defaultExpandedKeys));
    const flattenTree = computed(() => {
      const expandedKeys = expandedKeysSet.value;
      const flattenNodes = [];
      const nodes = tree.value || [];
      const stack = [];
      for (let i = nodes.length - 1; i >= 0; --i) {
        stack.push(nodes[i]);
      }
      while (stack.length) {
        const node = stack.pop();
        if (!node)
          continue;
        flattenNodes.push(node);
        if (expandedKeys.has(node.key)) {
          const children = node.children;
          if (children) {
            for (let i = node.children.length - 1; i >= 0; --i) {
              stack.push(node.children[i]);
            }
          }
        }
      }
      return flattenNodes;
    });
    function isExpanded(node) {
      return expandedKeysSet.value.has(node.key);
    }
    function collpase(node) {
      expandedKeysSet.value.delete(node.key);
    }
    const loadingKeysRef = ref(/* @__PURE__ */ new Set());
    function triggerLoading(node) {
      if (!node.children.length && !node.isLeaf) {
        const loadingKeys = loadingKeysRef.value;
        if (!loadingKeys.has(node.key)) {
          loadingKeys.add(node.key);
          const onLoad = props.onLoad;
          if (onLoad) {
            onLoad(node.rawNode).then((children) => {
              node.rawNode.children = children;
              node.children = createTree(children, node);
              loadingKeys.delete(node.key);
            });
          }
        }
      }
    }
    function expand(node) {
      expandedKeysSet.value.add(node.key);
      triggerLoading(node);
    }
    function toggleExpand(node) {
      const expandKeys = expandedKeysSet.value;
      if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
        collpase(node);
      } else {
        expand(node);
      }
    }
    const selectKeysRef = ref([]);
    watch(
      () => props.selectedKeys,
      (value) => {
        if (value) {
          selectKeysRef.value = value;
        }
      },
      {
        immediate: true
      }
    );
    function handleSelect(node) {
      let keys = Array.from(selectKeysRef.value);
      if (!props.selectable)
        return;
      if (props.multiple) {
        const index = keys.findIndex((key) => key === node.key);
        if (index > -1) {
          keys.splice(index, 1);
        } else {
          keys.push(node.key);
        }
      } else {
        if (keys.includes(node.key)) {
          keys = [];
        } else {
          keys = [node.key];
        }
      }
      emit("update:selectedKeys", keys);
    }
    provide(treeInjectKey, { slots: useSlots() });
    const checkedKeysRefs = ref(new Set(props.defaultCheckedKeys));
    function isChecked(node) {
      return checkedKeysRefs.value.has(node.key);
    }
    function isDiabled(node) {
      return !!node.disabled;
    }
    const indeterminateKeySet = ref(/* @__PURE__ */ new Set());
    function isIndeterminate(node) {
      return indeterminateKeySet.value.has(node.key);
    }
    function toggle(node, checked) {
      if (!node)
        return;
      const checkKeys = checkedKeysRefs.value;
      if (checked) {
        indeterminateKeySet.value.delete(node.key);
      }
      checkKeys[checked ? "add" : "delete"](node.key);
      const children = node.children;
      if (children) {
        children.forEach((childNode) => {
          if (!childNode.disabled) {
            toggle(childNode, checked);
          }
        });
      }
    }
    function findNode(key) {
      return flattenTree.value.find((node) => node.key === key);
    }
    function updateCheckedKeys(node) {
      if (node.parentKey) {
        const parentNode = findNode(node.parentKey);
        if (parentNode) {
          let allChecked = true;
          let hasChecked = false;
          const nodes = parentNode.children;
          for (const node2 of nodes) {
            if (checkedKeysRefs.value.has(node2.key)) {
              hasChecked = true;
            } else if (indeterminateKeySet.value.has(node2.key)) {
              allChecked = false;
              hasChecked = true;
            } else {
              allChecked = false;
            }
          }
          if (allChecked) {
            checkedKeysRefs.value.add(parentNode.key);
            indeterminateKeySet.value.delete(parentNode.key);
          } else if (hasChecked) {
            indeterminateKeySet.value.add(parentNode.key);
            checkedKeysRefs.value.delete(parentNode.key);
          } else {
            checkedKeysRefs.value.delete(parentNode.key);
            indeterminateKeySet.value.delete(parentNode.key);
          }
          updateCheckedKeys(parentNode);
        }
      }
    }
    function toggleCheck(node, checked) {
      toggle(node, checked);
      updateCheckedKeys(node);
    }
    onMounted(() => {
      checkedKeysRefs.value.forEach((key) => {
        toggle(findNode(key), true);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(bem).b())
      }, [
        createVNode(unref(BVirtualList), {
          items: unref(flattenTree),
          remain: 8,
          size: 35
        }, {
          default: withCtx(({ node }) => [
            (openBlock(), createBlock(_sfc_main$1, {
              key: node.key,
              node,
              expanded: isExpanded(node),
              "loading-keys": loadingKeysRef.value,
              "selected-keys": selectKeysRef.value,
              "show-checkbox": _ctx.showCheckbox,
              checked: isChecked(node),
              disabled: isDiabled(node),
              indeterminate: isIndeterminate(node),
              onToggle: toggleExpand,
              onSelect: handleSelect,
              onCheck: toggleCheck
            }, null, 8, ["node", "expanded", "loading-keys", "selected-keys", "show-checkbox", "checked", "disabled", "indeterminate"]))
          ]),
          _: 1
        }, 8, ["items"])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=tree.vue.js.map
