<script setup>
const route = useRoute()
const { locale } = useI18n()
const slug = ref(route.path)
</script>

<template>
  <article-content :content="slug" target="_self" :key="slug" />
</template>

<style scoped></style>
