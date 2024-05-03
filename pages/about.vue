<script setup lang="ts">
const doc = await useAsyncData('doc', () => queryContent('/about').findOne())
</script>

<template>
  <div class="container page-margin">
    <content-renderer :value="doc">
      <div class="titel-xl mt-3rem">{{ doc.data.value.heading }}</div>
      <content-renderer-markdown class="a" :value="doc.data.value.body" />
    </content-renderer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
