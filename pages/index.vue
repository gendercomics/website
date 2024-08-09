<script setup>
import Hero from '~/components/Hero.vue'
import { useFeatureStore } from '~/stores/features.ts'
import ComingSoon from '~/components/ComingSoon.vue'

const featureStore = useFeatureStore()
</script>

<template>
  <div class="page-margin pt">
    <hero />
    <div v-if="featureStore.comingSoon">
      <coming-soon />
    </div>
    <preview
      v-else
      img="art/feuchtenberger_karlmarxallee.jpeg"
      img-caption="Anke Feuchtenberger"
      content="/about"
    />
  </div>
</template>

<style scoped>
.pt {
  padding-top: 0.5rem;
}
</style>
