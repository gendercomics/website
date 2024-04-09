<script setup></script>

<template>
  <div class="container">
    <div class="titel-s result-count">1234 Ergebnisse</div>
    <div>
      <div class="separator">
        <img class="arrow-red" src="@/assets/images/arrow-red-down-flat.svg" />
        <img
          class="corner-green"
          src="@/assets/images/corner-green-3-50px(buttons).svg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.separator {
  display: flex;
  flex-direction: column;
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
</style>
