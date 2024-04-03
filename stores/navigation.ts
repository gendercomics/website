import { defineStore } from 'pinia'

export const useNavStore = defineStore('navStore', {
  state: () => ({
    burgerActive: false,
    navbarVisible: false,
  }),
  getters: {
    isBurgerActive: (state) => {
      return state.burgerActive
    },
    isNavbarVisible: (state) => {
      return state.navbarVisible
    },
  },
  actions: {
    toggleNav() {
      this.burgerActive = !this.burgerActive
      this.navbarVisible = !this.navbarVisible
    },
    initBurger() {
      this.burgerActive = false
    },
    setBurgerActive() {
      this.burgerActive = true
    },
    setNavbarVisible(visible: boolean) {
      this.navbarVisible = visible
    },
  },
})
