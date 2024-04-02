<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="container mt-10">
    <div class="w-90">
      <p class="tag">ABOUT</p>
      <p class="titel-kachel">Zusammenfassung</p>
      <a class="a">Hallo Welt!</a>
    </div>
    <!--
    <div class="button-container">
      <button-gray text="mehr erfahren" />
    </div>
    -->
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}


</style>
