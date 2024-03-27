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
  <Columns :count=2 :img="img" :content="content" />
</template>

<style scoped></style>
