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
    default: '~/assets/images/placeholder.png',
  },
  content: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="row">
    <div class="cell-debug column border-right w-50">
      <ImageBox :img="img" />
    </div>
    <div class="cell-debug column w-50">
      <TextPreviewBox :content="content" />
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

.column {
}

.border-right {
  border-right: 2px solid var(--gc-green);
}
</style>
