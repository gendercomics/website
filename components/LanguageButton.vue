<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
  <nuxt-link
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    class="button button-font"
  >
    {{ locale.name }}
  </nuxt-link>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
  transition: background-color 0.3s ease;
  background-color: white;
}

.button-font {
  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-600);
  color: var(--gc-gray);
  font-size: var(--gc-font-size-21);
  line-height: var(--gc-line-spacing-33);
  text-decoration: none;
}

.button:hover {
  background-color: var(--gc-red);
  transition: background-color 0.3s ease;
}
</style>
