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
    default: '#',
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
  <div class="row" :class="{ 'border-left': props.imgCol === 2 }">
    <div class="w-50">
      <ImageBox
        class="border-right"
        v-if="props.imgCol === 1"
        :img="props.img"
        :width="props.imgWidth"
        :caption="props.imgCaption"
        :caption-link="props.imgCaptionLink"
      />
      <div v-else-if="props.imgCol === 2">
        <TextPreviewBox :content="props.content" />
      </div>
    </div>
    <div class="w-50">
      <ImageBox
        v-if="props.imgCol === 2"
        :img="props.img"
        :width="props.imgWidth"
        :caption="props.imgCaption"
        :caption-link="props.imgCaptionLink"
        :btn-arrow="false"
      />
      <div v-else-if="props.imgCol === 1">
        <TextPreviewBox :content="props.content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cell-debug {
  border: 1px solid black;
}

.row {
  display: flex;
  justify-content: center;
  margin-left: 1px;
  margin-right: 2px;
}

.border-right {
  border-right: 2px solid var(--gc-green);
  margin-right: -1px;
}

.border-left {
  border-left: 2px solid var(--gc-green);
  margin-left: 0;
}
</style>
