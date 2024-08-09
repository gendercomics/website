import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('featureStore', {
  state: () => ({
    comingSoon: true,
    databaseEnabled: false,
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
