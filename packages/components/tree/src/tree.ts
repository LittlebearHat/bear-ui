import { isBoolean } from '@bear-ui/utils'
import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from 'vue'
export type Key = number | string
export interface TreeNode extends Required<TreeOption> {
  level: number
  rawNode: TreeOption
  children: TreeNode[]
  isLeaf: boolean
  parentKey: Key | undefined
}
export interface TreeOption {
  label?: Key
  key?: Key
  children?: TreeOption[]
  isLeaf?: boolean
  disabled?: boolean
  [key: string]: unknown
}
export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  onLoad: Function as PropType<(node: TreeOption) => Promise<TreeOption[]>>,
  selectedKeys: {
    type: Array as PropType<Key[]>
  },
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  }
} as const
export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>
  },
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    required: false
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean
} as const
export const treeNodeEmitts = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node,
  check: (node: TreeNode, value: boolean) => isBoolean(value)
}
export const treeEmitts = {
  'update:selectedKeys': (keys: Key[]) => keys
}
export type treeNodeProps = Partial<ExtractPropTypes<typeof treeProps>>
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
export interface TreeContext {
  slots: SetupContext['slots'] // 插槽属性
  // emit: SetupContext['emit']
}
export const treeInjectKey: InjectionKey<TreeContext> = Symbol()
export const treeNodeContentProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  }
} as const
