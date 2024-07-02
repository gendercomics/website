<script setup>
import Hero from '~/components/Hero.vue'
import FwfUni from '~/components/FwfUni.vue'
</script>

<template>
  <div class="page-margin pt">
    <hero />
    <preview
      img="art/feuchtenberger_karlmarxallee.jpeg"
      img-caption="Anke Feuchtenberger"
      content="about"
    />
  </div>
</template>

<style scoped>
.pt {
  padding-top: 0.5rem;
}
</style>
