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
      <div class="image-container">
        <img src="@/assets/images/placeholder.png" alt="cover" class="center" />
      </div>
      <div class="tag font-size-16 mt-25 ml-50">{{ artist }}</div>
      <div class="titel-kachel mt-10 ml-50 mb-3rem">{{ title }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  flex: 1 1 calc(25%);
  flex-direction: column;
  border-radius: 100px;
  border: 2px solid var(--gc-green);
  box-sizing: border-box;
}

.container:hover {
  background: var(--white) 0 0 no-repeat padding-box;
  border-radius: 100px;
  box-shadow: 0 0 50px var(--gc-green-2);
  transition: 0.4s ease-out;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: auto;
}

.comic img {
  max-width: 80%;
  height: auto;
  display: block;
  border-radius: 50px;
  margin-top: 50px;
}

.mt-25 {
  margin-top: 25px;
}

.font-size-16 {
  font-size: var(--gc-font-size-16);
}

.mb-3rem {
  margin-bottom: 3rem;
}
</style>
