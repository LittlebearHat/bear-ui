<template>
  <div :class="bem.b()">
    <b-virtual-list
      :items="flattenTree"
      :remain="8"
      :size="35"
    >
      <template #default="{ node }">
        <b-tree-node
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          :loading-keys="loadingKeysRef"
          :selected-keys="selectKeysRef"
          :show-checkbox="showCheckbox"
          :checked="isChecked(node)"
          :disabled="isDiabled(node)"
          :indeterminate="isIndeterminate(node)"
          @toggle="toggleExpand"
          @select="handleSelect"
          @check="toggleCheck"
        ></b-tree-node>
      </template>
    </b-virtual-list>
  </div>
</template>
<script lang="ts" setup>
import {
  Key,
  TreeNode,
  TreeOption,
  treeProps,
  treeEmitts,
  treeInjectKey
} from './tree.ts'

import {
  ref,
  watch,
  computed,
  defineEmits,
  provide,
  useSlots,
  onMounted
} from 'vue'
import { createNamespace } from '@bear-ui/hooks'
import BTreeNode from './treeNode.vue'
import BVirtualList from '@bear-ui/components/virtual-list'
defineOptions({
  name: 'b-tree'
})
const bem = createNamespace('tree')
const props = defineProps(treeProps)
const tree = ref<TreeNode[]>([])
function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOption) {
      return node[key] as string
    },
    getLabel(node: TreeOption) {
      return node[label] as string
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[]
    }
  }
}
const TreeOptions = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
)
function createTree(data: TreeOption[], parent: TreeNode | null = null) {
  //console.log('叠', parent)
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map(node => {
      const children = TreeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: TreeOptions.getKey(node),
        label: TreeOptions.getLabel(node),
        children: [],
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length == 0,
        disabled: !!node.disabled,
        parentKey: parent?.key
      }
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode)
      }
      // console.log('levele', treeNode)
      return treeNode
    })
  }
  const result: TreeNode[] = traversal(data, parent)
  return result
}
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
    console.log(tree.value)
  },
  { immediate: true }
)
const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))
const flattenTree = computed(() => {
  const expandedKeys = expandedKeysSet.value
  const flattenNodes: TreeNode[] = []
  const nodes = tree.value || []
  const stack: TreeNode[] = []
  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i])
  }
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    flattenNodes.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i])
        }
      }
    }
  }
  return flattenNodes
})
function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key)
}
//折叠
function collpase(node: TreeNode) {
  expandedKeysSet.value.delete(node.key)
}
const loadingKeysRef = ref(new Set<Key>())
//异步加载
function triggerLoading(node: TreeNode) {
  //console.log('13123', loadingKeysRef)
  if (!node.children.length && !node.isLeaf) {
    const loadingKeys = loadingKeysRef.value
    if (!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key)
      const onLoad = props.onLoad
      if (onLoad) {
        onLoad(node.rawNode).then((children: TreeNode) => {
          // console.log('111', children)
          node.rawNode.children = children
          node.children = createTree(children, node)
          loadingKeys.delete(node.key)
        })
      }
    }
  }
}
//展开
function expand(node: TreeNode) {
  expandedKeysSet.value.add(node.key)
  // console.log('1node', node)
  triggerLoading(node)
}
function toggleExpand(node: TreeNode) {
  const expandKeys = expandedKeysSet.value
  if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collpase(node)
  } else {
    expand(node)
  }
}
const emit = defineEmits(treeEmitts)
const selectKeysRef = ref<Key[]>([])
console.log(selectKeysRef.value)

watch(
  () => props.selectedKeys,
  value => {
    if (value) {
      selectKeysRef.value = value
      // console.log('jiantimng', value)
    }
  },
  {
    immediate: true
  }
)
function handleSelect(node: TreeNode) {
  let keys = Array.from(selectKeysRef.value)
  if (!props.selectable) return
  if (props.multiple) {
    const index = keys.findIndex(key => key === node.key)
    if (index > -1) {
      keys.splice(index, 1)
    } else {
      keys.push(node.key)
    }
  } else {
    if (keys.includes(node.key)) {
      keys = []
    } else {
      keys = [node.key]
    }
  }
  emit('update:selectedKeys', keys)
}
provide(treeInjectKey, { slots: useSlots() })
const checkedKeysRefs = ref(new Set(props.defaultCheckedKeys))
function isChecked(node: TreeNode) {
  return checkedKeysRefs.value.has(node.key)
}
function isDiabled(node: TreeNode) {
  return !!node.disabled
}
const indeterminateKeySet = ref<Set<Key>>(new Set())
function isIndeterminate(node: TreeNode) {
  return indeterminateKeySet.value.has(node.key)
}
function toggle(node: TreeNode, checked: boolean) {
  if (!node) return
  console.log('gouuxuan', checkedKeysRefs, checked)
  const checkKeys = checkedKeysRefs.value
  if (checked) {
    indeterminateKeySet.value.delete(node.key)
  }
  checkKeys[checked ? 'add' : 'delete'](node.key)
  const children = node.children
  if (children) {
    children.forEach((childNode: any) => {
      if (!childNode.disabled) {
        toggle(childNode, checked)
      }
    })
  }
}
function findNode(key: Key) {
  return flattenTree.value.find(node => node.key === key)
}

function updateCheckedKeys(node: TreeNode) {
  if (node.parentKey) {
    //有⽗key 存在
    const parentNode = findNode(node.parentKey) //找到⽗节点
    if (parentNode) {
      let allChecked = true
      let hasChecked = false
      const nodes = parentNode.children
      for (const node of nodes) {
        if (checkedKeysRefs.value.has(node.key)) {
          // 孩⼦被 选中
          hasChecked = true
        } else if (indeterminateKeySet.value.has(node.key)) {
          //孩⼦是半选
          allChecked = false
          hasChecked = true
        } else {
          allChecked = false
        }
      }
      if (allChecked) {
        checkedKeysRefs.value.add(parentNode.key)
        indeterminateKeySet.value.delete(parentNode.key)
      } else if (hasChecked) {
        indeterminateKeySet.value.add(parentNode.key)
        checkedKeysRefs.value.delete(parentNode.key)
      } else {
        checkedKeysRefs.value.delete(parentNode.key)
        indeterminateKeySet.value.delete(parentNode.key)
      }
      updateCheckedKeys(parentNode) // ⾃ ⼰搞定再看⽗级
    }
  }
}

function toggleCheck(node: TreeNode, checked: boolean) {
  console.log(flattenTree)
  console.log(node, checked)
  toggle(node, checked)
  updateCheckedKeys(node)
}
onMounted(() => {
  checkedKeysRefs.value.forEach((key: Key) => {
    toggle(findNode(key)!, true)
  })
})

//console.log(flattenTree.value)
</script>
