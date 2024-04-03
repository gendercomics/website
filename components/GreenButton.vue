<script setup>
import router from '#app/plugins/router.js'

const props = defineProps({
  text: {
    type: String,
    default: 'Künstler*in',
  },
  link: {
    type: String,
    default: '',
  },
  left: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
})

function openLink() {
  window.open(props.link, '_self')
  // TODO use router
}
</script>

<template>
  <div>
    <img
      v-if="left"
      src="~/assets/images/corner-green-3-50px(buttons).svg"
      class="btn-corner-left"
      alt="corner-green-3-50px(buttons)"
    />
    <button class="green-button" @click="openLink">{{ text }}</button>
    <img
      v-if="right"
      src="~/assets/images/corner-green-2-50px(buttons).svg"
      class="btn-corner-right"
      alt="corner-green-2-50px(buttons)"
    />
  </div>
</template>

<style scoped>
.green-button {
  padding: 10px 20px;
  background-color: var(--gc-green);
  color: var(--white);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 220px;

  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-italic);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-16);
  letter-spacing: var(--gc-character-spacing-0-5);
}

.green-button:hover {
  background-color: var(--gc-red);
}

.btn-corner-left {
  transform: translateY(-4px);
  margin-left: -2px;
}

.btn-corner-right {
  transform: translateY(-4px);
  margin-right: -2px;
}
</style>
