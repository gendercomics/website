<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: 'placeholder.png',
  },
  link: {
    type: String,
    default: '#',
  },
})

function getImageUrl() {
  return new URL(`../assets/images/${props.img}`, import.meta.url)
}
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img :src="getImageUrl()" alt="" />
    </div>
    <div class="text-container">
      <p class="tag">{{ props.category }}</p>
      <p class="titel-kachel">{{ props.title }}</p>
      <p class="a">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-container img {
  width: 75%;
  height: auto;
  border-radius: 50px;
}

.text-container {
  padding-right: 20px;
}
</style>
