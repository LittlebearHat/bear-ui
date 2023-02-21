<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSelected),
      bem.is('disabled', node.disabled)
    ]"
  >
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
        @click="handleExpand"
      >
        <b-icon>
          <Switcher v-if="!isLoading"></Switcher>
          <Loading v-else></Loading>
        </b-icon>
      </span>
      <b-checkbox
        v-if="showCheckbox"
        :model-value="checked"
        :indeterminate="indeterminate"
        :disabled="disabled"
        @change="handleCheckChange"
      ></b-checkbox>
      <span
        :class="bem.e('label')"
        @click="handleSelect"
      ><BTreeNodeContent :node="node"></BTreeNodeContent></span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BIcon from '@bear-ui/components/icon'
import Switcher from './icon/Switcher.tsx'
import { createNamespace } from '@bear-ui/hooks'
import { treeNodeProps, treeNodeEmitts } from './tree.ts'
import Loading from './icon/Loading.tsx'
import { computed } from 'vue'
import BTreeNodeContent from './tree-node-content.tsx'
import BCheckbox from '@bear-ui/components/checkbox'

const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)
const emit = defineEmits(treeNodeEmitts)
function handleExpand() {
  emit('toggle', props.node)
}
const isLoading = computed(() => {
  //console.log('31231241244124', props.loadingKeys)
  return props.loadingKeys.has(props.node.key)
})
const isSelected = computed(() => {
  return props.selectedKeys.includes(props.node.key)
})
function handleSelect() {
  if (props.node.disabled) return
  emit('select', props.node)
}
function handleCheckChange(value: boolean) {
  emit('check', props.node, value)
}
</script>
