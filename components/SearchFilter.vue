<script setup>
const activeButtons = {
  comics: true,
  persons: false,
  publisher: false,
  keywords: false,
}
const filter = {
  comics: false,
  persons: false,
  publisher: false,
  keywords: false,
}
</script>

<template>
  <div class="flex container">
    <bubble-button
      label="Comics"
      v-model:is-active="activeButtons.comics"
      v-model:is-filter="filter.comics"
      class="pr-1r"
    />
    <bubble-button
      label="Persons"
      v-model:is-active="activeButtons.persons"
      v-model:is-filter="filter.persons"
      class="pr-1r"
    />
    <bubble-button
      label="Publisher"
      v-model:is-active="activeButtons.publisher"
      v-model:is-filter="filter.publisher"
      class="pr-1r"
    />
    <bubble-button
      label="Keywords"
      v-model:is-active="activeButtons.keywords"
      v-model:is-filter="filter.keywords"
    />
  </div>
</template>

<style scoped>
.container {
  justify-content: center;;
}
</style>
