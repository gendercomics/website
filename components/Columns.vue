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
  content: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="row">
    <div class="w-50 border-right">
      <ImageBox :img="props.img" class="plr-20" />
    </div>
    <div class="w-50">
      <TextPreviewBox :content="content" class="plr-20" />
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
