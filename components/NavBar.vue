<script setup>
const { t } = useI18n({
  useScope: 'local',
})

const navStore = useNavStore()

const isMenuOpen = ref(false)
const navbar = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    navbar.value &&
    !navbar.value.contains(event.target)
  ) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="navigation" ref="navbar">
    <burger />
    <div v-if="navStore.isNavbarVisible" class="nav-bar">
      <nuxt-link-locale to="/"
        ><img
          src="@/assets/images/logo-gendercomics-h.svg"
          alt="gc"
          class="ml-50"
      /></nuxt-link-locale>
      <div class="nav-links">
        <div>
          <div class="nav-link" @click="toggleMenu">{{ t('about') }}</div>
          <popup-menu v-model="isMenuOpen" />
        </div>
        <nuxt-link-locale to="/database" class="nav-link">{{
          t('database')
        }}</nuxt-link-locale>
        <nuxt-link-locale to="/book" class="nav-link">{{
          t('book')
        }}</nuxt-link-locale>
        <nuxt-link-locale to="/activities" class="nav-link">{{
          t('activities')
        }}</nuxt-link-locale>
        <nuxt-link-locale to="/blog" class="nav-link">{{
          t('blog')
        }}</nuxt-link-locale>
      </div>
      <div class="lang-switcher">
        <language-button />
      </div>
      <div>
        <img
          src="@/assets/images/arrow-green-down-flat.svg"
          class="arrow-center"
          alt="arrow-green-down-flat"
        />
        <img
          src="@/assets/images/arrow-green-down-flat.svg"
          class="arrow-right"
          alt="arrow-green-down-flat"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
}

.nav-bar {
  display: flex;
  justify-self: end;
  background: var(--gc-green) 0 0 no-repeat padding-box;
  color: var(--white);
  padding: 1rem;

  left: 10%;
  width: 85%;
  border-radius: 0 0 100px 100px;
  opacity: 1;
}

.nav-links {
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
}

.nav-link {
  margin-right: 2rem;
  font-family: var(--gc-font-family-outfit);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-21);
  line-height: var(--gc-line-spacing-25);
  color: var(--gc-gray);
  cursor: pointer;
}

.arrow-center {
  position: absolute;
  left: 50%;
  top: 73px;
  transform: translate(-50%);
}

.arrow-right {
  position: absolute;
  right: 50px;
  top: 73px;
}

a:link {
  text-decoration: none;
}

a:hover {
  color: var(--white);
}

.nav-link:hover {
  color: var(--white);
}

.lang-switcher {
  position: absolute;
  right: 70px;
  top: 30px;
}
</style>

<i18n lang="yaml">
de:
  about: Über
  database: Datenbank
  book: Buch
  activities: Aktivitäten
  blog: Blog
en:
  about: About
  database: Database
  book: Book
  activities: Activities
  blog: Blog
</i18n>
