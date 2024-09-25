<script setup>
const route = useRoute()
const { locale } = useI18n()
const slug = ref(route.path)
onMounted(() => {
  console.log('slug=' + slug.value)
})
watch(locale, () => {
  console.log('watch=' + slug.value + ', locale=' + locale.value)
  //window.location.reload()
})
</script>

<template>
  <main>
    <article-content :content="slug" :key="slug.value" />
  </main>
</template>
