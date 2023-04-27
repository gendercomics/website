<template>
  <div>Imprint</div>
</template>

<script>
export default {
  name: 'Imprint',
  mounted() {
    this.$store.commit('modules/navigation/setBurgerActive')
    this.$store.commit('modules/navigation/setNavbarVisible', true)
  }
}
</script>

<style scoped></style>
