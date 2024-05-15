<template>
  <div class="pattern-background">
    <NavBar />
    <slot />
    <div class="w-90">
      <divider t4 b5 b6 />
      <contact />
      <divider b1 b2 b3flat b4flat b5 t6 />
      <fwf-uni />
      <divider t1 b2 b3 />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import FwfUni from '~/components/FwfUni.vue'
</script>
