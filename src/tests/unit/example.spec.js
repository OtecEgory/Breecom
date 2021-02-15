import { mount } from '@vue/test-utils'
import AddCartBtn from '../../components/AddCartBtn'

const wrapper = mount(AddCartBtn)

describe('AddCartBtn', () => {
  test('Is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })

  test('Vue instance emits click event', () => {
    wrapper.trigger('click')
  })
})