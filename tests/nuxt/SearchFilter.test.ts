import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SearchFilter from '~/components/SearchFilter.vue'

// mountSuspended (not @vue/test-utils' plain `mount`) is required here because
// SearchFilter relies on Nuxt auto-imports (the global <bubble-button> component
// and useI18n) that only resolve inside a real Nuxt app context.
describe('SearchFilter', () => {
  it('renders one toggle per filter category', async () => {
    const wrapper = await mountSuspended(SearchFilter, {
      props: {
        modelValue: {
          comics: false,
          persons: false,
          publishers: false,
          keywords: false,
        },
      },
    })

    expect(wrapper.findAll('.toggle-button')).toHaveLength(4)
  })

  it('toggles a filter category when its bubble is clicked', async () => {
    // The real caller (pages/database/index.vue) passes a `reactive()` object
    // down through SearchForm -> SearchFilter -> BubbleButton as v-model. Because
    // `v-model="filter.comics"` binds a *property* of the model (not the whole
    // model), Vue mutates that shared object in place instead of emitting
    // `update:modelValue` on SearchFilter itself - so we assert on the mutated
    // object, the same thing the real parent observes.
    const filterState = {
      comics: false,
      persons: false,
      publishers: false,
      keywords: false,
    }
    const wrapper = await mountSuspended(SearchFilter, {
      props: { modelValue: filterState },
    })

    await wrapper.findAll('.toggle-button')[0].trigger('click')

    expect(filterState.comics).toBe(true)
  })
})
