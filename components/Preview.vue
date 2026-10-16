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
  <div class="row" :class="{ 'border-left-green flush-left': props.imgCol === 2 }">
    <div class="w-50">
      <ImageBox
        class="border-right-green image-box-edge"
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

.row {
  display: flex;
  justify-content: center;
  margin-left: 1px;
  margin-right: 2px;
}

/* overlap the neighbouring border; the bottom padding extends the border below
   the caption, matching ImageBox's image area */
.image-box-edge {
  margin-right: -1px;
  padding-bottom: 45px;
}

.flush-left {
  margin-left: 0;
}
</style>
