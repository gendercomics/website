<template>
  <div>
    <div class="burger" />
    <img
      v-if="!$store.getters['modules/navigation/isBurgerActive']"
      src="~/assets/images/burger-passive.png"
      class="burger"
      @click="toggle"
    />
    <img
      v-if="$store.getters['modules/navigation/isBurgerActive']"
      src="~/assets/images/burger-close.png"
      class="burger"
      @click="toggle"
    />
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

  background-color: var(--gc-gray);
  background-repeat: no-repeat;
  background-clip: padding-box;
  border-radius: 50%;

  opacity: 1;
}

.burger:hover {
  position: absolute;
  left: 111px;
  top: 15px;
  width: 50px;
  transform: translateX(-50%);
  margin-left: 1px;

  background-color: var(--gc-red);

  cursor: pointer;
}

.burger-close {
}
</style>
