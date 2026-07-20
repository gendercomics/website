import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSearchStore } from '~/stores/search'

// Pinia stores need an active pinia instance per test, otherwise
// `useSearchStore()` throws "no active Pinia" outside a component.
beforeEach(() => {
  setActivePinia(createPinia())
})

describe('search store', () => {
  it('starts with no search input', () => {
    const store = useSearchStore()
    expect(store.getSearchInput).toBeNull()
  })

  it('stores the search input set via setSearchInput', () => {
    const store = useSearchStore()
    const input = {
      searchTerm: 'Alison Bechdel',
      searchFilter: {
        comics: true,
        persons: false,
        publishers: false,
        keywords: false,
      },
      language: 'en',
    }

    store.setSearchInput(input)

    expect(store.getSearchInput).toEqual(input)
  })

  it('clears the search input when set to null', () => {
    const store = useSearchStore()
    store.setSearchInput({
      searchTerm: 'test',
      searchFilter: {
        comics: true,
        persons: true,
        publishers: true,
        keywords: true,
      },
      language: 'de',
    })

    store.setSearchInput(null)

    expect(store.getSearchInput).toBeNull()
  })
})
