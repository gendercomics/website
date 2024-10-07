<script setup lang="ts">
const route = useRoute()

const id = route.params.id
console.log('ID=' + id)
</script>

<template>
  <div class="container page-margin">
    <p>ID: {{ id }}</p>
  </div>
</template>

<style scoped></style>
