<template>
  <div></div>
</template>

<script>
export default {
  name: 'Database',
  mounted() {
    this.$store.commit('modules/navigation/setBurgerActive')
    this.$store.commit('modules/navigation/setNavbarVisible', true)
  }
}
</script>

<style scoped></style>
