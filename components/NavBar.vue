<script setup>
const isOpen = ref(false)
const toggleMenu = () => {
  console.log('isOpen=' + isOpen.value)
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <div class="burger-menu" @click="toggleMenu">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>
  </div>

  <nav v-if="isOpen" class="navigation">
    <div class="nav-bar">
      <nuxt-link to="/"
        ><img
          src="~/assets/images/logo-gendercomics-h.svg"
          alt="gc"
          class="ml-50"
      /></nuxt-link>
      <div class="nav-links">
        <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        <nuxt-link to="/team" class="nav-link">Team</nuxt-link>
        <nuxt-link to="/collaborations" class="nav-link"
          >Kooperationen</nuxt-link
        >
        <nuxt-link to="/database" class="nav-link">Datenbank</nuxt-link>
      </div>
    </div>

    <img src="~assets/images/arrow-green-down-flat.svg" class="arrow-center" />
    <img src="~assets/images/arrow-green-down-flat.svg" class="arrow-right" />
  </nav>

  <div v-if="isOpen"></div>
</template>

<style scoped>
.navigation {
  position: sticky;
  top: 0;
}

.nav-bar {
  display: flex;
  justify-self: end;
  background: var(--gc-green) 0% 0% no-repeat padding-box;
  color: var(--white);
  padding: 1rem;

  left: 10%;
  width: 90%;
  border-radius: 0px 0px 100px 100px;
  opacity: 1;
  z-index: 999;
}

.burger-menu {
  display: block;
  cursor: pointer;
}

.burger-line {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
}

.nav-links {
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
}

.nav-link {
  margin-right: 2.5rem;

  font-family: var(--gc-font-family-outfit);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-21);
  line-height: var(--gc-line-spacing-25);
  color: var(--gc-gray);
}

.arrow-center {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

.arrow-right {
  position: absolute;
  right: 50px;
}

a:link {
  text-decoration: none;
}

a:hover {
  color: var(--white);
}
</style>
