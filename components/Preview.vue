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
  <Columns :count="2" :img="props.img" :content="props.content" />
</template>

<style scoped></style>
