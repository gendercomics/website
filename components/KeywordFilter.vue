<script setup>
const { t } = useI18n({
  useScope: 'local',
})

const filter = defineModel({
  power: false,
  health: false,
  sex: false,
  development: false,
})
</script>

<template>
  <div>
    <div class="container-row row-height">
      <div>
        <bubble-button
          :label="t('power')"
          class="pr-1r"
          v-model="filter.power"
        />
        <bubble-button
          :label="t('health')"
          class="pr-1r"
          v-model="filter.health"
        />
        <bubble-button :label="t('sex')" class="pr-1r" v-model="filter.sex" />
        <bubble-button
          :label="t('development')"
          class="pr-1r"
          v-model="filter.development"
        />
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
  development: Entwicklung Identität
en:
  power: Power Violence
  health: Health Illness Dis_ability
  sex: Gender Sexuality
  development: Development Identity
</i18n>
