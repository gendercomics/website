<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Künstler*in',
  },
  link: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_blank',
  },
  highlight: {
    type: Boolean,
    default: false,
  },
})

function openLink() {
  navigateTo(props.link)
}

const hasLink = computed(() => {
  return props.link !== ''
})
</script>

<template>
  <div>
    <div
      class="outline-button cursor-pointer"
      :class="{ highlight: props.highlight }"
    >
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.outline-button {
  padding: 7px 15px;
  color: var(--gc-green);
  border: 2px solid var(--gc-green);
  border-radius: 50px;

  font-family: var(--gc-font-family-george-rounded), sans-serif;
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-16);
  letter-spacing: var(--gc-character-spacing-0-5);
  text-decoration: none;
  text-transform: uppercase;
}

.cursor-pointer {
  cursor: pointer;
}

.outline-button:hover {
  background-color: white;
  box-shadow: 0 0 40px 0 var(--gc-green);
}

a[href]:hover {
  color: var(--gc-green);
}

.highlight {
  box-shadow: 0 0 20px 0 var(--gc-red);
  background-color: var(--gc-gray);
}
</style>
