<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">

import { ref } from 'vue'
import BIcon from '@bear-ui/components/icon'
import BAvatar from '@bear-ui/components/avatar'
import { AddCircle } from '@vicons/ionicons5'
import { Key } from '@bear-ui/components/tree'

function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}
function createLabel(level: number): string {
  if (level === 4) return '40'
  if (level === 3) return '3'
  if (level === 2) return '2'
  if (level === 1) return '1'
  return ''
}
const data = ref(createData())
// const data = ref<TreeOption[]>([
//   {
//     key: '0',
//     label: '0',
//     children: [
//       {
//         key: '0-0',
//         label: '0-0'
//       },
//       {
//         disabled: true,
//         key: '0-1',
//         label: '0-1',
//         children: [
//           {
//             label: '0-1-0',
//             key: '0-1-0'
//           },
//           {
//             label: '0-1-1',
//             key: '0-1-1'
//           }
//         ]
//       }
//     ]
//   }
// ])

const value = ref<Key[]>([])
</script>

<template>
  <b-icon
    :color="'red'"
    size="20"
  >
    <AddCircle></AddCircle>
  </b-icon>
  <b-icon>
    <AddCircle></AddCircle>
  </b-icon>
  <b-button type="primary">
    primary
  </b-button>
  <b-button size="large">
    large default
  </b-button>
  <b-tree
    v-model:selected-keys="value"
    :data="data"
    selectable
    show-checkbox
    :default-checked-keys="['40']"
  ></b-tree>
  <b-checkbox
    :disabled="false"
    :indeterminate="true"
    label="节点"
  ></b-checkbox>
  <b-avatar
    src="/vite.svg"
    size="large"
    alt="large"
  />
  <b-avatar
    src="/vite.svg"
    shape="square"
    alt="deflaut"
  />
  <b-avatar
    src="/vite.svg"
    size="small"
    alt="small"
  />
</template>

<style scoped></style>
