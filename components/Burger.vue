<script setup>
const store = useNavStore()
</script>

<template>
  <div>
    <div class="burger">
      <img
        v-if="!store.isBurgerActive"
        src="@/assets/images/burger.svg"
        @click="store.toggleNav()"
        alt="burger"
      />

      <img
        v-if="!store.isBurgerActive"
        src="@/assets/images/burger-hover.svg"
        class="burger-hover"
        @click="store.toggleNav()"
        alt="burger-hover"
      />
    </div>

    <div class="burger">
      <img
        v-if="store.isBurgerActive"
        src="@/assets/images/burger-close.svg"
        @click="store.toggleNav()"
        alt="burger-close"
      />

      <img
        v-if="store.isBurgerActive"
        src="@/assets/images/burger-close-hover.svg"
        class="burger-hover"
        @click="store.toggleNav()"
        alt="burger-close-hover"
      />
    </div>
  </div>
</template>

<style scoped>
.burger {
  position: absolute;
  left: 87px;
  top: 15px;
  width: 50px;
  transform: translateX(-50%);
  margin-left: 1px;
  z-index: 1000;
}

.burger-hover {
  display: none;
}

.burger:hover .burger-hover {
  cursor: pointer;
  display: inline;
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
}
</style>
