<script setup>
const props = defineProps({
  img: {
    type: String,
    default: 'placeholder.png',
  },
  width: {
    type: [Number, String],
    default: '100%',
  },
  caption: {
    type: String,
    default: 'Künstler*in',
  },
  captionLink: {
    type: String,
    default: '/',
  },
  btnArrow: {
    type: Boolean,
    default: true,
  },
})

const imagePath = computed(() => {
  return '/images/' + props.img
})
</script>

<template>
  <div class="container">
    <div class="image-container border-right">
      <img :src="imagePath" alt="" :width="props.width" />
    </div>
    <div class="caption-container margin">
      <green-button
        v-if="props.btnArrow"
        :text="props.caption"
        :link="props.captionLink"
        right-arrow
      />
      <green-button
        v-else
        :text="props.caption"
        :link="props.captionLink"
        right-corner
      />
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

.caption-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.margin {
  margin-top: 2px;
}

.border-right {
  border-right-color: var(--gc-green);
  border-right-width: 2px;
  border-right-style: solid;
  padding-bottom: 45px;
}

.mt-45 {
  margin-top: 45px;
}
</style>
