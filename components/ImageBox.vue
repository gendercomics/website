<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    default: '@/assets/images/placeholder.png',
  },
})
</script>

<template>
  <div class="container-row">
    <div class="image-container">
      <!--nuxt-img :src="require(`@/assets/images/${img}`)" /-->
      <img src="@/assets/images/placeholder.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 50px;
}
</style>
