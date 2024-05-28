<script setup lang="ts">
const props = defineProps({
  up: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="container">
    <img
      v-if="!props.up"
      src="@/assets/images/arrow-red-down-borderwidth.svg"
      alt=""
    />
    <img
      v-else
      src="@/assets/images/arrow-red-up-borderwidth.svg"
      alt=""
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
