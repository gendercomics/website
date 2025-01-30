<script setup>
const route = useRoute()
const { locale } = useI18n()
const slug = ref(route.path)
</script>

<template>
  <article-content :content="slug" />
</template>

<style scoped></style>
