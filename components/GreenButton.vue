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
  leftCorner: {
    type: Boolean,
    default: false,
  },
  leftArrow: {
    type: Boolean,
    default: false,
  },
  rightCorner: {
    type: Boolean,
    default: false,
  },
  rightArrow: {
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
    <img
      v-if="leftCorner"
      src="~/assets/images/corner-green-3-50px(buttons).svg"
      class="btn-corner-left"
      alt="corner-green-3-50px(buttons)"
    />
    <img
      v-if="leftArrow"
      src="~/assets/images/arrow-green-right-flat.svg"
      class="btn-arrow-left"
      alt="corner-green-2-50px(buttons)"
    />

    <button
      v-if="hasLink"
      class="green-button cursor-pointer"
      @click="openLink"
    >
      {{ text }}
    </button>
    <button v-else class="green-button">
      {{ text }}
    </button>

    <img
      v-if="rightCorner"
      src="~/assets/images/corner-green-2-50px(buttons).svg"
      class="btn-corner-right"
      alt="corner-green-2-50px(buttons)"
    />
    <img
      v-if="rightArrow"
      src="~/assets/images/arrow-green-left-borderwidth.svg"
      class="btn-arrow-right"
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
  margin-bottom: 10px;
  width: 220px;

  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-italic);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-16);
  letter-spacing: var(--gc-character-spacing-0-5);
}

.cursor-pointer {
  cursor: pointer;
}

.green-button:hover {
  background-color: var(--gc-red);
}

.btn-corner-left {
  transform: translateY(-4px);
  margin-left: -2px;
}

.btn-arrow-left {
  transform: translateY(32px);
}

.btn-corner-right {
  transform: translateY(-4px);
  margin-right: -2px;
}

.btn-arrow-right {
  transform: translateY(32px);
  margin-right: -2px;
}
</style>
