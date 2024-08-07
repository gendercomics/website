import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('featureStore', {
  state: () => ({
    comingSoon: false,
  }),
  getters: {
    isComingSoon: (state) => {
      return state.comingSoon
    },
  },
})
