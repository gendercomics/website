<template>
  <div>
    <div class="burger">
      <img
        v-if="!$store.getters['modules/navigation/isBurgerActive']"
        src="~assets/images/burger.svg"
        @click="toggle"
      />

      <img
        v-if="!$store.getters['modules/navigation/isBurgerActive']"
        src="~assets/images/burger-hover.svg"
        class="burger-hover"
        @click="toggle"
      />
    </div>

    <div class="burger">
      <img
        v-if="$store.getters['modules/navigation/isBurgerActive']"
        src="~assets/images/burger-close.svg"
        @click="toggle"
      />

      <img
        v-if="$store.getters['modules/navigation/isBurgerActive']"
        src="~assets/images/burger-close-hover.svg"
        class="burger-hover"
        @click="toggle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  methods: {
    toggle() {
      this.$store.commit('modules/navigation/toggleBurger')
    }
  }
}
</script>

<style scoped>
.burger {
  position: absolute;
  left: 111px;
  top: 15px;
  width: 50px;
  transform: translateX(-50%);
  margin-left: 1px;
}

.burger-hover {
  display: none;
}

.burger:hover .burger-hover {
  cursor: pointer;
  display: inline;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 50px;
}
</style>
