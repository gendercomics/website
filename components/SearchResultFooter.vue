<script setup>
const resultsPerPage = defineModel(8)
</script>

<template>
  <div class="container-row w-50 mr--1">
    <green-button
      text="Weitere Beiträge laden"
      link="#"
      right-arrow
    />
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  justify-content: flex-end;
}

.mr--1 {
  margin-right: -1px;
}
</style>
