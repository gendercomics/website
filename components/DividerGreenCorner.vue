<script setup lang="ts">
const props = defineProps({
  quadrant: {
    type: Number,
    default: 3,
  },
})
</script>

<template>
  <div class="container">
    <img
      v-if="props.quadrant === 1"
      src="@/assets/images/corner-green-1-50px(buttons).svg"
      alt=""
    />
    <img
      v-else-if="props.quadrant === 2"
      src="@/assets/images/corner-green-2-50px(buttons)-1.svg"
      alt=""
    />
    <img
      v-else-if="props.quadrant === 4"
      src="@/assets/images/corner-green-4-50px(buttons).svg"
      alt=""
      class="pos-4"
    />
    <img
      v-else
      src="@/assets/images/corner-green-3-50px(buttons)-1.svg"
      alt=""
      class="pos-3"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 0;
}

.pos-3 {
  transform: translateX(50%);
  margin-right: 2px;
  margin-bottom: -2px;
}

.pos-4 {
  transform: translateX(50%);
  margin-right: 2px;
  margin-top: -2px;
}
</style>
