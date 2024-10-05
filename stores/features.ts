import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('featureStore', {
  state: () => ({
    comingSoon: false,
    databaseEnabled: true,
  }),
  getters: {
    isComingSoon: (state) => {
      return state.comingSoon
    },
    isDatabaseEnabled: (state) => {
      return state.databaseEnabled
    },
  },
})
