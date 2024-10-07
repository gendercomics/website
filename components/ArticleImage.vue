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
  fromUrl: {
    type: Boolean,
    default: false,
  },
})

const imagePath = computed(() => {
  return '/images/' + props.image
})

const imageURL = computed(() => {
  return 'http://localhost:8001/images/' + props.image
})
/*
function imageUrl() {
  return new URL('images', `http://localhost:8001/images/${props.image}`)
}

 */
</script>

<template>
  <div class="container">
    <img v-if="fromUrl" :src="imageURL" alt="" class="image" />
    <img v-else :src="imagePath" alt="" class="image" />
    <green-button
      right-corner
      :text="props.caption"
      :link="props.captionLink"
      class="button p-10"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.image {
  width: 420px;
  height: auto;
  border-radius: 50px;
}

.button {
  margin-top: 20px;
  align-self: flex-end;
  margin-right: -100px;
}

.p-10 {
  padding-bottom: 10px;
}
</style>
