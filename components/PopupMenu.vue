<script setup>
defineProps({
  // [{ to: '/path', label: 'Text' }]
  items: { type: Array, required: true },
})

const isMenuOpen = defineModel({ type: Boolean, required: true, default: false })

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div v-if="isMenuOpen" class="container popup-menu-position">
    <img src="@/assets/images/arrow-gray-up-flat.svg" alt="" class="arrow" />
    <div class="popup-menu">
      <div class="popup-menu-list">
        <div v-for="item in items" :key="item.to" class="popup-menu-items">
          <nuxt-link-locale :to="item.to" class="menu-item" @click="closeMenu">{{
            item.label
          }}</nuxt-link-locale>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.popup-menu {
  background-color: var(--gc-gray);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: ease-out 0.3s;
  border-radius: 50px;
  min-width: 209px;
}

.popup-menu-position {
  position: absolute;
  top: calc(100% + 32px);
  left: calc(50% - 100px);
}

.popup-menu-list {
  list-style-type: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: -4px;
}

.popup-menu-items {
  padding: 0.5rem 2rem;
}

.menu-item:hover {
  font-weight: var(--gc-font-weight-600);
  transition: ease-out 0.3s;
}

.menu-item {
  text-decoration: none;
  font-family: var(--gc-font-family-outfit);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-21);
  line-height: var(--gc-line-spacing-25);
  letter-spacing: var(--gc-character-spacing-0-53);
  color: var(--white);
}

.arrow {
  width: 100px;
  transform: translateX(50%);
}
</style>
