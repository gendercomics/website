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
  noCaption: {
    type: Boolean,
    default: false,
  },
  fromApiUrl: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '420px',
  },
  height: {
    type: String,
    default: 'auto',
  },
  target: {
    type: String,
    default: '_blank',
  },
})

const imagePath = computed(() => {
  return '/images/' + props.image
})

const appConfig = useAppConfig()
const imageURL = computed(() => {
  return appConfig.apiImageUrl + '/' + props.image
})
</script>

<template>
  <div class="container">
    <img
      v-if="fromApiUrl"
      :src="imageURL"
      alt=""
      class="image"
      :height="props.height"
      :width="props.width"
    />
    <img
      v-else
      :src="imagePath"
      alt=""
      class="image"
      :height="props.height"
      :width="props.width"
    />
    <green-button
      v-if="!props.noCaption"
      right-corner
      :text="props.caption"
      :link="props.captionLink"
      :target='props.target'
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
