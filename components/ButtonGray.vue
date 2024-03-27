<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'click me',
  },
  link: {
    type: String,
    default: '',
  },
})

const openLink = () => {
  this.$router.push({ path: this.link })
}
</script>

<template>
  <div class="button-container">
    <img
      src="@/assets/images/corner-gray-flat-3-50px(buttons).svg"
      alt="corner-gray-3-50px(buttons)"
      class="corner-img"
    />
    <img
      src="@/assets/images/corner-red-flat-3-50px(buttons).svg"
      alt="corner-red-flat-3-50px(buttons)"
    />
    <div class="button" @click="openLink">{{ text }}</div>
  </div>
</template>

<style scoped>
.button {
  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-italic);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-16);
  line-height: var(--gc-line-spacing-35);
  letter-spacing: var(--gc-character-spacing-2-4);
  color: var(--white);
  text-align: left;
  text-transform: uppercase;

  background: var(--gc-gray) 0% 0% no-repeat padding-box;
  border-radius: 0px 50px 50px 50px;
  opacity: 1;

  cursor: pointer;
  margin-top: -4px;
  width: 150px;
  height: 30px;
  z-index: 2;
}

.corner-img {
  z-index: 1;
}

.button:hover {
  background-color: var(--gc-red);
}
</style>
