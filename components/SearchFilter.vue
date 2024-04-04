<script setup>
const activeButtons = {
  comics: false,
}
const filter = {
  comics: false,
}
</script>

<template>
  <div class="flex">
    <bubble-button
      label="Comics"
      v-model:is-active="activeButtons.comics"
      v-model:is-filter="filter.comics"
    />
  </div>
</template>

<style scoped></style>
