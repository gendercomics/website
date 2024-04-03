<script setup>
import Hero from '~/components/Hero.vue'
import FwfUni from '~/components/FwfUni.vue'
</script>

<template>
  <div class="page-margin pt">
    <hero />
    <preview img="placeholder.png" content="about" />
    <divider t4 b5 b6 />
    <contact />
    <divider b1 b2 b3flat b4flat b5 t6 />
    <fwf-uni />
    <divider t1 b2 b3 />
  </div>
</template>

<style scoped>
.pt {
  padding-top: 0.5rem;
}
</style>
