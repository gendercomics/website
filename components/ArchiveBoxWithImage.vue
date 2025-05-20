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
  contentPath: {
    type: String,
    default: '',
  },
  contentTitle: {
    type: String,
    default: '',
  },
})

const imagePath = computed(() => {
  return '/images/' + props.img
})
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img :src="imagePath" alt="" />
    </div>
    <div class="text-container">
      <div class="tag">{{ props.category }}</div>
      <div class="titel-kachel">{{ props.title }}</div>
      <ContentRenderer :value="props.description" tag="div">
        <ContentRendererMarkdown
          class="a mt-2rem"
          :value="props.description"
        />
      </ContentRenderer>
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
  width: 200px;
  height: auto;
  border-radius: 20px;
}

.text-container {
  padding-right: 20px;
}
</style>
