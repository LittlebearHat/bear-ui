import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import BIcon from '@bear-ui/components/icon/src/icon.vue'
describe('Icon.vue', () => {
  it('render', () => {
    const wrapper = mount(BIcon, {
      props: {
        color: 'red'
      }
    })
    expect(wrapper.element.getAttribute('style')).toContain('color: red')
  })
  it('render11', () => {
    const wrapper = mount(BIcon, {
      props: {
        size: '18px'
      }
    })
    expect(wrapper.element.getAttribute('style')).toContain('font-size: 18px')
  })
})
