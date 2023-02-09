import { describe, expect, it } from 'vitest'

// import { mount } from '@vue/test-utils'
// import BIcon from '../src/icon.vue'

describe('test BIcon', () => {
  it('should be 4', () => {
    expect(2 + 2).toBe(4)
  })
  // // 测试 当默认插槽为"Hello world"时，期望这个组件的text包含"Hello world"
  // it('should render slot', () => {
  //   const wrapper = mount(BIcon, {
  //     slots: {
  //       default: 'Hello world'
  //     }
  //   })
  //   // Assert the rendered text of the component
  //   expect(wrapper.text()).toContain('Hello world')
  // })
  // // 测试Button组件传入不同type展示不同样式
  // it('should have class', () => {
  //   const wrapper = mount(BIcon, {})
  //   expect(wrapper.classes()).toContain('b-icon')
  // })
})
