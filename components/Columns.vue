<script setup>
import ImageBox from '~/components/ImageBox.vue'
import TextPreviewBox from '~/components/TextPreviewBox.vue'

const props = defineProps({
  count: {
    type: Number,
    default: 2,
  },
  img: {
    type: String,
    default: 'placeholder.png',
  },
  imgWidth: {
    type: [Number, String],
    default: '100%',
  },
  imgCol: {
    type: Number,
    default: 1,
  },
  imgCaption: {
    type: String,
    default: 'Künstler*in',
  },
  imgCaptionLink: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="row">
    <div class="w-50 border-right">
      <ImageBox
        v-if="props.imgCol === 1"
        :img="props.img"
        :width="props.imgWidth"
        :caption="props.imgCaption"
        :caption-link="props.imgCaptionLink"
      />
      <div v-else-if="props.imgCol === 2" class="w-50">
        <TextPreviewBox :content="content" />
      </div>
    </div>
    <div class="w-50">
      <ImageBox
        v-if="props.imgCol === 2"
        :img="props.img"
        :width="props.imgWidth"
        :caption="props.imgCaption"
        :caption-link="props.imgCaptionLink"
      />
      <div v-else-if="props.imgCol === 1">
        <TextPreviewBox :content="content" />
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
}

.border-right {
  border-right: 2px solid var(--gc-green);
  margin-right: 1px;
}
</style>
