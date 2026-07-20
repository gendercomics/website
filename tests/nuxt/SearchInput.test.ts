import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SearchInput from '~/components/SearchInput.vue'

describe('SearchInput', () => {
  it('renders an enabled text input by default (database feature is on)', async () => {
    const wrapper = await mountSuspended(SearchInput, {
      props: { modelValue: 'gender' },
    })

    const input = wrapper.get('input')
    expect(input.attributes('disabled')).toBeUndefined()
    expect(input.element.value).toBe('gender')
  })

  it('clears the model and emits "clear" when the reset icon is clicked', async () => {
    const wrapper = await mountSuspended(SearchInput, {
      props: { modelValue: 'gender' },
    })

    await wrapper.get('.reset-btn-hover').trigger('click')

    expect(wrapper.emitted('clear')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([''])
  })
})
