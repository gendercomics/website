<script setup>
import { useFeatureStore } from '~/stores/features.ts'
import { init, trackPages } from 'insights-js'

const featureStore = useFeatureStore()
const trackingDisabled = computed(() => {
  const hostname = window.location.hostname
  const isProductionDomain = hostname === 'gendercomics.net'
  const isStaging =
    hostname === 'stage.gendercomics.net' || hostname.includes('stage')
  return !isProductionDomain || isStaging
})

init('TrYgnSHvKAIkGdBl', { disabled: trackingDisabled })
trackPages()
</script>

<template>
  <div class="pattern-background">
    <NavBar v-if="!featureStore.isComingSoon" />
    <slot />
    <div class="page-margin" v-if="!featureStore.isComingSoon">
      <divider t4 b5 b6 />
      <contact />
      <divider b1 b2 b3flat b4flat b5 t6 />
      <fwf-mdw-uni />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
