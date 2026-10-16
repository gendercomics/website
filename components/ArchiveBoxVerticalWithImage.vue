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
  img: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: '#',
  },
})

function getImageUrl() {
  return new URL(`../assets/images/${props.img}`, import.meta.url)
}

const imagePath = computed(() => {
  return '/images/' + props.img
})

const linkTarget = computed(() => {
  return props.link.startsWith('https') ? '_blank' : '_self'
})

function openLink() {
  navigateTo(props.link, { external: true, open: linkTarget.value })
}
</script>

<template>
  <div class="container card" @click="openLink">
    <div v-if="props.img !== null" class="image-container">
      <img :src="imagePath" alt="" />
    </div>
    <div class="text-container">
      <div class="tag">{{ props.category }}</div>
      <div class="titel-kachel">{{ props.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
  width: 75%;
  padding-bottom: 33px;
}
</style>
