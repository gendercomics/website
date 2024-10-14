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
const isHover = ref(false)
</script>

<template>
  <div class="button-container">
    <img
      v-if="!isHover"
      src="@/assets/images/corner-gray-flat-3-50px(buttons).svg"
      alt="corner-gray-3-50px(buttons)"
      class="corner-img w-50px"
    />
    <img
      v-if="isHover"
      src="@/assets/images/corner-red-flat-3-50px(buttons).svg"
      alt="corner-red-flat-3-50px(buttons)"
      class="w-50px"
    />
    <nuxt-link
      :to="props.link"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      class="button"
      >{{ props.text }}</nuxt-link
    >
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
}

.button {
  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-italic);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-16);
  line-height: var(--gc-line-spacing-35);
  letter-spacing: var(--gc-character-spacing-2-4);
  color: var(--white);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  background: var(--gc-gray) 0% 0% no-repeat padding-box;
  border-radius: 0 50px 50px 50px;
  opacity: 1;

  cursor: pointer;
  width: 175px;
  height: 35px;
  z-index: 2;
}

.corner-img {
  z-index: 1;
}

.button:hover {
  background-color: var(--gc-red);
}

.w-50px {
  width: 50px;
}

.transition {
  transition: ease-out 0.3s;
}

a[href]:hover {
  color: var(--white);
}
</style>
