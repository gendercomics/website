<script setup>
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-if="props.isMenuOpen" class="container popup-menu-position">
    <img src="@/assets/images/arrow-gray-up-flat.svg" alt="" class="arrow" />
    <div class="popup-menu">
      <ul>
        <li><NuxtLink to="/about" class="menu-item">About</NuxtLink></li>
        <li><NuxtLink to="/team" class="menu-item">Team</NuxtLink></li>
        <li>
          <NuxtLink to="/collaborations" class="menu-item"
            >Collaborations</NuxtLink
          >
        </li>
      </ul>
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
}

.popup-menu-position {
  position: absolute;
  top: calc(100% + 32px);
  left: calc(50% - 100px);
}

.popup-menu ul {
  list-style-type: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: -4px;
}

.popup-menu li {
  padding: 0.5rem 2rem;
}

.popup-menu li a {
  text-decoration: none;
}

.popup-menu li:hover {
  color: var(--gc-gray);
  transition: ease-out 0.3s;
}

.menu-item {
  font-family: Outfit;
  font-style: normal;
  font-weight: normal;
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
