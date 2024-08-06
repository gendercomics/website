import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('featureStore', {
  state: () => ({
    comingSoon: true,
  }),
  getters: {
    isComingSoon: (state) => {
      return state.comingSoon
    },
  },
})
