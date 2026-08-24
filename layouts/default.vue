<script setup>
import { useFeatureStore } from '~/stores/features.ts'

const featureStore = useFeatureStore()
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
