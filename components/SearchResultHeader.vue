<script setup>
const resultsPerPage = defineModel(8)
</script>

<template>
  <div class="container">
    <div class="titel-s result-count">1234 Ergebnisse</div>
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
    <div class="result-sizer-pos">
      <div class="results-sizer-start tag">Results per page</div>
    </div>
    <div class="result-sizer-pos res-size-element">8</div>
    <div class="result-sizer-pos res-size-element ml--2">16</div>
    <div class="result-sizer-pos res-size-element ml--2">32</div>
    <div class="result-sizer-pos res-size-element ml--2">64</div>
    <div class="result-sizer-pos results-sizer-end ml" />
    <div class="container line-container">
      <div class="line-green" :style="{ width: lineWidth }" />
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
.container {
  display: flex;
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

.results-sizer-start {
  background-color: var(--gc-gray);
  border-radius: 100px 0 0 100px;
  opacity: 1;
  color: var(--white);
  padding: 10px;
  height: 37px;
}

.result-sizer-pos {
  align-self: flex-end;
  margin-bottom: -28px;
}

.results-sizer-end {
  background-color: var(--gc-gray);
  border-radius: 0 100px 100px 0;
  opacity: 1;
  padding: 10px;
  height: 37px;
  width: 20px;
}

.res-size-element {
  font-family: var(--gc-font-family-outfit);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-20);
  line-height: var(--gc-line-spacing-33);
  letter-spacing: var(--gc-character-spacing-1);
  color: var(--lightgray);
  padding: 10px;
  width: 33px;
  justify-self: center;
  text-align: center;
  border: 2px solid var(--gc-gray);
  cursor: pointer;
  transition: ease-out 0.3s;
}

.res-size-element:hover {
  color: var(--gc-green);
  font-weight: var(--gc-font-weight-bold);
  background-color: var(--white);
  transition: background-color ease-out 0.3s;
}

.ml--2 {
  margin-left: -2px;
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
</style>
