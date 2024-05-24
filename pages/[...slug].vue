<script setup>
const route = useRoute()
const slug = ref(route.path)
onMounted(() => {
  console.log('slug=' + slug.value)
})
</script>

<template>
  <main>
    <article-content :content="slug" />
  </main>
</template>
