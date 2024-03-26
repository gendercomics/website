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
    <div class="cell-debug column-left border-right">
      <ImageBox :img=img />
    </div>
    <div class="cell-debug column-right">
      <TextPreviewBox :content=content />
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

.column-left {
  flex: 0 0 auto;
  width: 50%;
  padding-right: 20px;
}

.column-right {
  flex: 0 0 auto;
  width: 50%;
  padding-left: 20px;
}

.border-right {
  border-right: 2px solid var(--gc-green);
}
</style>
