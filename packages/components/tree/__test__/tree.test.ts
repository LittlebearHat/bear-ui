import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { nextTick } from 'vue'
import { BTree } from '../index'
describe('b-tree', () => {
  test('should work with import on demand', () => {
    console.log(BTree)
    mount(BTree)
  })
  test('should accept proper options', () => {
    mount(BTree, {
      props: {
        data: [
          {
            label: '123',
            key: '123',
            children: [
              {
                label: '123',
                key: '123'
              }
            ]
          }
        ]
      }
    })
  })
})
