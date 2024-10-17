import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    searchInput: {
      searchTerm: '',
      searchFilter: {
        comics: true,
        persons: true,
        publishers: true,
        keywords: false,
      },
      numResults: 8,
    },
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
    setSearchTerm: (searchInput: Object) => {
      state.searchInput = searchInput
    },
    setNumResults(numResults: integer) {
      state.numResults = numResults
    },
  },
})
