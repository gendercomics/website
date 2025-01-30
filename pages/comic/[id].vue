<script setup lang="ts">
import Comic from '~/components/Comic.vue'

const route = useRoute()
const slug = ref(route.path)

onMounted(() => {
  console.log('slug=' + slug.value)
})
</script>

<template>
  <main>
    <comic :id="slug.value" :slug="slug.value" />
  </main>
</template>
