<script setup lang="ts">
import ComicMinimal from '~/components/ComicMinimal.vue'
</script>

<template>
  <div class="flex mt-100">
    <div class="result-row">
      <comic-minimal artist="Anke Feuchtenberger" title="Genossin Kuckuck" />
      <comic-minimal />
      <comic-minimal />
      <comic-minimal />
    </div>
  </div>
</template>

<style scoped>
.result-row {
  display: flex;
}

.mt-100 {
  margin-top: 100px;
}
</style>
