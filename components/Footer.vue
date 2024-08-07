<script setup>
import { useFeatureStore } from '~/stores/features.ts'

const { t } = useI18n({
  useScope: 'local',
})
const year = new Date().getFullYear()
const featureStore = useFeatureStore()
</script>

<template>
  <div class="footer">
    <img
      src="~/assets/images/arrow-gray-up-flat.svg"
      class="d-block m-auto"
      alt=""
    />
    <div class="footer-block">
      <div class="footer-element">
        &copy; {{ year }} GenderComics - {{ t('copyright') }}
      </div>
      <div v-if="!featureStore.isComingSoon">
        <nuxt-link-locale to="/imprint" class="footer-element">{{
          t('imprint')
        }}</nuxt-link-locale>
        <nuxt-link-locale to="/privacy" class="footer-element">{{
          t('privacy')
        }}</nuxt-link-locale>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-block {
  display: block;
}

a:link {
  text-decoration: none;
}

a:hover {
  color: var(--gc-green);
}

.m-auto {
  margin: auto;
}

.footer {
  clear: both;
}

.footer-block {
  display: grid;
  grid-template-columns: auto auto auto;
  height: 75px;
  background-color: var(--gc-gray);
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: var(--gc-font-family-outfit);
  font-weight: var(--gc-font-weight-300);
  font-size: var(--gc-font-size-16);
}

.footer-element {
  flex: 1;
  text-align: center;
  color: var(--lightgray);
  padding-left: 20px;
  padding-right: 20px;
}
</style>

<i18n lang="yaml">
de:
  imprint: Impressum
  privacy: Datenschutz
  copyright: Alle Rechte vorbehalten.
en:
  imprint: Imprint
  privacy: Privacy Policy
  copyright: All rights reserved.
</i18n>
