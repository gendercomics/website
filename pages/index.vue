<template>
  <div>
    <landing class="mt-3"/>
    <divider t4 t5 b6 />
    <contact />
    <divider b1 b2 b3flat b4flat b5 t6 />
    <fwf-uni />
    <divider t1 t2 b3 />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$store.commit('modules/navigation/initBurger')
    this.$store.commit('modules/navigation/setNavbarVisible', false)
  }
}
</script>

<style scoped></style>
