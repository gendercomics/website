<script setup>
const filter = reactive({
  comics: false,
  persons: false,
  publisher: false,
  keywords: false,
})
</script>

<template>
  <div class="flex container">
    <bubble-button label="Comics" v-model="filter.comics" class="pr-1r" />
    <bubble-button label="Persons" v-model="filter.persons" class="pr-1r" />
    <bubble-button label="Publisher" v-model="filter.publisher" class="pr-1r" />
    <bubble-button label="Keywords" v-model="filter.keywords" />
  </div>
</template>

<style scoped>
.container {
  justify-content: center;
}
</style>
