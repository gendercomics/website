<template>
  <div>
    <div class="titel-xl center mt-5">
      Visualitäten von Geschlecht in deutschsprachigen Comics.
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.$store.commit('modules/navigation/setBurgerActive')
    this.$store.commit('modules/navigation/setNavbarVisible', true)
  }
}
</script>

<style scoped>
.center {
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
