import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import BIcon from '@bear-ui/components/icon'
describe('Icon.vue', () => {
  test('render', () => {
    const wrapper = mount(BIcon, {
      props: {
        color: 'red'
      }
    })
    //console.log(wrapper)
    expect(wrapper.element.getAttribute('style')).toContain('color: red')
  })
  test('render11', () => {
    const wrapper = mount(BIcon, {
      props: {
        size: '18px'
      }
    })
    //console.log(wrapper)
    expect(wrapper.element.getAttribute('style')).toContain('font-size: 18px')
  })
})
