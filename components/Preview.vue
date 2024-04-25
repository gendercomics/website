<script setup>
const props = defineProps({
  img: {
    type: String,
    default: 'placeholder.png',
  },
  imgWidth: {
    type: [Number, String],
    default: '100%',
  },
  content: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <Columns
    :count="2"
    :img="props.img"
    :img-width="props.imgWidth"
    :content="props.content"
  />
</template>

<style scoped></style>
