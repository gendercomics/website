export default {
  namespaced: true,

  state: () => ({
    isBurgerActive: false,
    isNavbarVisible: false
  }),

  getters: {
    isBurgerActive: state => {
      return state.isBurgerActive
    },
    isNavbarVisible: state => {
      return state.isNavbarVisible
    }
  },

  mutations: {
    toggleBurger(state) {
      state.isBurgerActive = !state.isBurgerActive
      state.isNavbarVisible = !state.isNavbarVisible
    },
    initBurger(state) {
      state.isBurgerActive = false
    },
    setBurgerActive(state) {
      state.isBurgerActive = true
    },
    setNavbarVisible(state, visible) {
      state.isNavbarVisible = visible
    }
  },

  actions: {}
}
