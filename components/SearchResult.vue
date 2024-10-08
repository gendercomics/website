<script setup lang="ts">
import ComicMinimal from '~/components/ComicMinimal.vue'

const data = defineModel()

onMounted(() => {
  console.log('[SearchResult] data=' + data.value)
})
</script>

<template>
  <div class="flex mt-100">
    <div class="result-row">
      <div v-for="(comic, index) in data" :key="index">
        <comic-minimal :comic="comic" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: flex-end;
  gap: 20px;
  box-sizing: border-box;
}

.mt-100 {
  margin-top: -10px;
}
</style>
