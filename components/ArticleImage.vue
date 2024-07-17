<script setup>
const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: 'Künstler*in',
  },
  captionLink: {
    type: String,
    default: '',
  },
})

const imagePath = computed(() => {
  return '/images/' + props.image
})
</script>

<template>
  <div class="container">
    <img :src="imagePath" alt="" class="image" />
    <green-button right-corner :text="props.caption" class="button" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.image {
  width: 420px;
  height: auto;
}

.button {
  margin-top: 20px;
  align-self: flex-end;
  margin-right: -100px;
}
</style>
