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
    <img
      class="corner-width"
      src="@/assets/images/corner-green-line-4-100px.svg"
      alt="corner-green-line-1-100px"
    />
    <div class="border-top" />
    <img
      class="corner-width"
      src="@/assets/images/corner-green-line-1-100px.svg"
      alt="corner-green-line-1-100px"
    />
    <div class="border-left" />
    <div class="comic">
      <img src="@/assets/images/placeholder.png" alt="cover" />
      <div class="tag font-size-16 ml--50 mt-25">{{ artist }}</div>
      <div class="titel-kachel ml--50 pt-10">{{ title }}</div>
    </div>
    <div class="border-right" />
    <img
      class="corner-width"
      src="@/assets/images/corner-green-line-3-100px.svg"
      alt="corner-green-line-1-100px"
    />
    <div class="border-bottom" />
    <img
      class="corner-width"
      src="@/assets/images/corner-green-line-2-100px.svg"
      alt="corner-green-line-1-100px"
    />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 100px 280px 100px;
  grid-template-columns: 100px 180px 100px;
}

.container:hover {
  background: var(--white) 0 0 no-repeat padding-box;
  border-radius: 100px;
  box-shadow: 0 0 50px var(--gc-green-2);
}

.comic img {
  width: 280px;
  border-radius: 50px;
  margin-top: -50px;
  margin-left: -50px;
}

.border-top {
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

.border-left {
  border-left-color: var(--gc-green);
  border-left-width: 2px;
  border-left-style: solid;
}

.border-right {
  border-right-color: var(--gc-green);
  border-right-width: 2px;
  border-right-style: solid;
}

.border-bottom {
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.corner-width {
  width: 100px;
}

.ml--50 {
  margin-left: -50px;
}

.mt-25 {
  margin-top: 25px;
}

.pt-10 {
  padding-top: 10px;
}

.font-size-16 {
  font-size: var(--gc-font-size-16);
}
</style>
