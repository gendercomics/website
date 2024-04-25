<script setup>
const props = defineProps({
  img: {
    type: String,
    default: 'placeholder.png',
  },
})

function getImageUrl() {
  return new URL(`../assets/images/${props.img}`, import.meta.url)
}
</script>

<template>
  <div class="container-row">
    <div class="image-container">
      <img :src="getImageUrl()" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 50px;
}
</style>
