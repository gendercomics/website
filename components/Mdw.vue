<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="container-row">
    <div class="w-90">
      <div class="tag">{{ t('tag1') }}</div>
      <div class="tag gray">{{ t('tag2') }}</div>
      <div class="titel-kachel">{{ t('title') }}</div>
      <a class="a">{{ t('subtitle') }}</a>
      <a href="https://www.mdw.ac.at/ikm/" target="_blank">
        <img
          src="~assets/images/mdw_Logo_R_DE_blau.svg"
          alt="mdw"
          class="mt-30"
          width="440px"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  width: 100%;
}

.gray {
  color: var(--gc-gray);
}
</style>

<i18n lang="yaml">
de:
  tag1: Nationale Forschungspartnerin
  tag2: Evelyn Annuß
  title: Universität für Musik und darstellende Kunst Wien
  subtitle: International Research Center Gender and Performativity
en:
  tag1: National Research Partner
  tag2: Evelyn Annuß
  title: Universität für Musik und darstellende Kunst Wien
  subtitle: International Research Center Gender and Performativity
</i18n>
