import { defineStore } from 'pinia'
const { getLocaleCookie, setLocaleCookie } = useI18n()

export const useLangStore = defineStore('lang', {
  state: () => ({
    language: getLocaleCookie() || 'de',
  }),
  getters: {
    getLang: (state) => {
      return state.language
    },
  },
  actions: {
    setLanguage: function (lang: string) {
      setLocaleCookie(lang)
    },
  },
})
