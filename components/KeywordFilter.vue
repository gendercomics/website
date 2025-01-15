<script setup>
const { t } = useI18n({
  useScope: 'local',
})
const filter = defineModel({
  power: false,
  health: false,
  sex: false,
  age: false,
})
</script>

<template>
  <div>
    <div class="container-row row-height">
        <div>
          <bubble-button :label="t('power')" class="pr-1r" />
          <bubble-button :label="t('health')" class="pr-1r" />
          <bubble-button :label="t('sex')" class="pr-1r" />
          <bubble-button :label="t('age')" class="pr-1r" />
        </div>
      </div>


    <div class="container-row"></div>
  </div>
</template>
<style scoped>
.container-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-height {
  height: 63px;
}

.border-right-green {
  border-right: 2px solid var(--gc-green);
}
</style>

<i18n lang="yaml">
de:
  power: Macht Gewalt
  health: Gesundheit Krankheit Dis_ability
  sex: Geschlecht Sexualität
  age: Alter Entwicklung Identität
en:
  power: Power Violence
  health: Health Illness Dis_ability
  sex: Gender Sexuality
  age: Age Development Identity
</i18n>
