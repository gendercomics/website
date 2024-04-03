<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="container">
    <button class="button">{{ props.text }}</button>
    <img
      src="@/assets/images/arrow-gray-down-flat.svg"
      class="arrow-gray"
      alt="arrow-gray-down-flat"
    />
    <img
      src="@/assets/images/corner-green-3-50px(buttons).svg"
      alt="corner-green-3-50px(buttons)"
      class="ml-50"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  width: 200px;
  height: 100px;
  border-radius: 100px;
  border-width: 2px;
  border-color: var(--gc-gray);
  font-family: var(--gc-font-family-outfit);
  color: var(--gc-gray);
  font-weight: var(--gc-font-weight-600);
  font-size: var(--gc-font-size-25);
  line-height: var(--gc-line-spacing-25);
  cursor: pointer;
}

.button:hover {
  background-color: var(--white);
  border-color: var(--gc-green);
}

.arrow-gray {
  width: 75px;
  cursor: pointer;
}

.ml-50 {
  margin-left: 50px;
}
</style>
