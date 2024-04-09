<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})

const isActive = defineModel({ required: true, default: false })

const isHover = ref(false)

function toggleActive() {
  isActive.value = !isActive.value
  console.log('isActive: ' + isActive.value)
}
</script>

<template>
  <div
    class="toggle-button"
    :class="{ active: isActive }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @click="toggleActive"
  >
    <div class="button pattern-background" :class="{ active: isActive }">
      <div class="label" :class="{ active: isActive }">{{ label }}</div>
      <div>
        <img
          v-if="!isHover && !isActive"
          class="arrow"
          src="@/assets/images/arrow-gray-down-flat.svg"
          alt="Arrow 1"
        />
        <img
          v-if="isHover && !isActive"
          class="arrow"
          src="@/assets/images/arrow-green-down-flat.svg"
          alt="Arrow 2"
        />
        <img
          v-if="isActive"
          class="arrow"
          src="@/assets/images/arrow-red-down-flat.svg"
          alt="Arrow 3"
        />
      </div>
      <img
        v-if="isHover"
        class="circle"
        src="@/assets/images/corner-green-3-50px(buttons).svg"
        alt="Circle"
      />
      <img
        v-if="isActive"
        class="circle"
        src="@/assets/images/corner-red-3-50px(buttons).svg"
        alt="Arrow 3"
      />
    </div>
  </div>
</template>

<style scoped>
.toggle-button {
  display: inline-block;
  cursor: pointer;
}

.button {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 100px;
  border-radius: 100px;
  padding: 5px;
  border: 2px solid var(--gc-gray);
  transition: background-color 0.3s ease;
  background-color: white;
}

.button:hover {
  background-color: var(--white);
  border-color: var(--gc-green);
  background-image: none;
}

.button.active {
  background-color: var(--gc-red);
  border: 2px solid var(--gc-red);
  background-image: none;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--gc-font-family-outfit);
  color: var(--gc-gray);
  font-weight: var(--gc-font-weight-600);
  font-size: var(--gc-font-size-25);
  line-height: var(--gc-line-spacing-25);
}

.label.active {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--gc-font-family-outfit);
  color: var(--white);
  font-weight: var(--gc-font-weight-600);
  font-size: var(--gc-font-size-25);
  line-height: var(--gc-line-spacing-25);
}

.arrow {
  position: absolute;
  width: 75px;
  bottom: -38px;
  left: 50%;
  transform: translateX(-50%);
  transition: filter 0.3s ease;
  cursor: pointer;
}

.circle {
  position: absolute;
  bottom: -87px;
  left: calc(50% + 24px);
  transform: translateX(-50%);
  transition: opacity 0.3s ease;
  opacity: 0;
}

.toggle-button.active .arrow {
  filter: grayscale(0%);
}

.toggle-button:hover .arrow {
  filter: grayscale(0%);
}

.toggle-button:hover .circle {
  opacity: 1;
}

.toggle-button.active .circle {
  opacity: 1;
}

.pattern-background {
  background-image: url('@/assets/images/pattern-background.png');
  transition: background-color 0.3s ease;
}
</style>
