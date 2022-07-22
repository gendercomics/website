export default {
  namespaced: true,

  state: () => ({
    isBurgerActive: false
  }),

  getters: {},

  mutations: {
    toggle() {
      this.state.isBurgerActive = !this.state.isBurgerActive
      console.log('burger clicked: active=' + this.state.isBurgerActive)
    }
  },

  actions: {}
}
