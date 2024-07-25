<script setup>
const filter = defineModel({
  comics: false,
  persons: false,
  publisher: false,
  keywords: false,
})
</script>

<template>
  <div class="flex container-row">
    <div class="mt-1rem">
      <bubble-button label="Comics" v-model="filter.comics" class="pr-1r" />
      <bubble-button label="Persons" v-model="filter.persons" class="pr-1r" />
      <bubble-button
        label="Publisher"
        v-model="filter.publisher"
        class="pr-1r"
      />
      <bubble-button label="Keywords" v-model="filter.keywords" />
    </div>
  </div>
</template>

<style scoped>
.container-row {
  justify-content: center;
}
</style>
