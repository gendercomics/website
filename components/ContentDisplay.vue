<template>
  <ContentDoc :path="path" v-slot="{ doc }">
    <slot name="before" />
    <ContentRenderer :value="doc">
      <slot name="default" :doc="doc" />
    </ContentRenderer>
    <slot name="after" />
  </ContentDoc>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true
  }
})
</script>
