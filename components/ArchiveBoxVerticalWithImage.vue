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

const linkTarget = computed(() => {
  return props.link.startsWith('https') ? '_blank' : '_self'
})

function openLink() {
  navigateTo(props.link, { external: true, open: linkTarget.value })
}
</script>

<template>
  <div class="container" @click="openLink">
    <div v-if="props.img !== null" class="image-container">
      <img :src="getImageUrl()" alt="" />
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
  border-radius: 100px;
  border: 2px solid var(--gc-green);
  box-sizing: border-box;
  cursor: pointer;
}

.container:hover {
  background: var(--white) 0 0 no-repeat padding-box;
  border-radius: 100px;
  box-shadow: 0 0 50px var(--gc-green-2);
  transition: 0.4s ease-out;
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
