<script setup>
const props = defineProps({
  artist: {
    type: String,
    default: 'Artist',
  },
  title: {
    type: String,
    default: 'Title',
  },
})
</script>

<template>
  <div class="container">
    <div class="comic">
      <img src="@/assets/images/placeholder.png" alt="cover" />
      <div class="tag font-size-16 mt-25 ml-50">{{ artist }}</div>
      <div class="titel-kachel mt-10 ml-50">{{ title }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border-radius: 100px;
  border: 2px solid var(--gc-green);
  width: 380px;
  height: 480px;
}

.container:hover {
  background: var(--white) 0 0 no-repeat padding-box;
  border-radius: 100px;
  box-shadow: 0 0 50px var(--gc-green-2);
  transition: 0.4s ease-out;
}

.comic img {
  width: 280px;
  border-radius: 50px;
  margin-top: 50px;
  margin-left: 50px;
}

.mt-25 {
  margin-top: 25px;
}

.font-size-16 {
  font-size: var(--gc-font-size-16);
}
</style>
