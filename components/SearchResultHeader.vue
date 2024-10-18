<script setup>
import { useFeatureStore } from '~/stores/features.ts'

const featureStore = useFeatureStore()
const { t } = useI18n({
  useScope: 'local',
})
const props = defineProps({
  frame: {
    type: Boolean,
    default: false,
  },
  numResults: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="container-row" :class="{ 'border-right-green': props.frame }">
    <div>
      <div class="flex-column">
        <img
          class="arrow-red"
          src="@/assets/images/arrow-red-down-flat.svg"
          alt="arrow-red-down-flat"
        />
        <img
          class="corner-green"
          src="@/assets/images/corner-green-3-50px(buttons).svg"
          alt="corner-green-3-50px(buttons)"
        />
      </div>
    </div>

    <img
      class="num-result-arrow"
      src="@/assets/images/arrow-green-left-flat.svg"
      alt="corner-green-3-50px(buttons)"
    />
    <div class="titel-s result-count">
      {{ t('results', props.numResults) }}
    </div>
    <img
      class="num-result-arrow"
      src="@/assets/images/arrow-green-right-flat.svg"
      alt="corner-green-3-50px(buttons)"
    />

    <div v-if="!props.frame" class="container-row line-container">
      <div class="line-green" />
      <div class="result-sizer-pos">
        <img
          class="corner-green-100"
          src="@/assets/images/corner-green-line-1-100px.svg"
          alt="corner-green-line-1-100px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  justify-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.line-container {
  justify-content: flex-end;
  align-items: flex-end;
}

.result-count {
  color: var(--gc-green);
  align-self: flex-end;
  transform: translateY(50%);
  padding: 0 10px;
}

.arrow-red {
  width: 75px;
  padding-left: 10px;
  padding-right: 10px;
}

.corner-green {
  width: 50px;
  margin-left: 46px;
}

.result-sizer-pos {
  align-self: flex-end;
  margin-bottom: -28px;
}

.line-green {
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
  /* TODO dynamic width */
  width: 100px;
}

.corner-green-100 {
  float: right;
  margin-bottom: -70px;
  width: 100px;
}

.num-result-arrow {
  transform: translateY(48%);
}
</style>

<i18n lang="yaml">
de:
  results: keine Ergebnisse | {n} Ergebnis | {n} Ergebnisse
  page-size: Ergebnisse
en:
  results: no Results | {n} Result | {n} Results
  page-size: Results
</i18n>
