import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    searchInput: {} as SearchInput,
  }),
  getters: {
    getSearchInput: (state) => {
      return state.searchInput
    },
  },
  actions: {
    setSearchInput(searchInput: SearchInput) {
      this.searchInput = searchInput
      console.log('searchInput=' + JSON.stringify(searchInput))
    },
  },
})

interface SearchInput {
  searchTerm: string
  searchFilter: {
    comics: Boolean
    persons: Boolean
    publishers: Boolean
    keywords: Boolean
  }
  language: string
}
