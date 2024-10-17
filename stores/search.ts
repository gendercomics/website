import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    setSearchInput: null as SearchInput,
    numResults: 8,
  }),
  getters: {
    getSearchInput: (state) => {
      return state.searchInput
    },
    getNumResults: (state) => {
      return state.numResults
    },
  },
  actions: {
    setSearchInput(searchInput: SearchInput) {
      this.searchInput = searchInput
      console.log('searchInput=' + JSON.stringify(searchInput))
    },
    setNumResults(numResults: integer) {
      this.numResults = numResults
      console.log('numResults=' + this.getNumResults)
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
}
