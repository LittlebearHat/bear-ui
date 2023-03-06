import { render } from '@testing-library/vue'
import { describe, expect, test, vi } from 'vitest'
import { nextTick } from 'vue'
import { BTree } from '../index'
describe('b-tree', () => {
  test('should work with import on demand', () => {
    console.log(BTree)
    const { getByRole } = render(BTree)
    getByRole('tree')
  })
})
