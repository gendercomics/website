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
  imgCaption: {
    type: String,
    default: 'Künstler*in',
  },
  imgCaptionLink: {
    type: String,
    default: '/',
  },
  imgCol: {
    type: Number,
    default: 1,
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
    :img-caption="props.imgCaption"
    :img-caption-link="props.imgCaptionLink"
    :img-col="props.imgCol"
    :content="props.content"
  />
</template>

<style scoped></style>
