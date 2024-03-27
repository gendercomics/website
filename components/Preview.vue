<script setup>
const props = defineProps({
  img: {
    type: String,
    default: 'placeholder.png',
  },
  content: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <Columns :count=2 :img="img" :content="content" class="w-90" />
</template>

<style scoped></style>
