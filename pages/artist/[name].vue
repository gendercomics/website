<script setup>
const route = useRoute()
const slug = ref(route.path)
</script>

<template>
  <article-content :key="slug" :content="slug" target="_self" />
</template>

<style scoped></style>
