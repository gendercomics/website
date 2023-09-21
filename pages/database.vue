<template>
  <div>
    <div class="titel-xl center mt-5">
      Datenbank
    </div>
  </div>
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

<style scoped>
.center {
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
