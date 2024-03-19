<script setup></script>

<template>
  <div class="container w-90">
    <div class="row">
      <div class="column-left">
        <img
          src="~/assets/images/corner-green-line-4.svg"
          alt=""
          height="200"
        />
      </div>

      <div class="column-center">
        <span class="border-top-green" />
      </div>

      <div class="column-right">
        <span class="border-top-green" />
        <img
          src="~/assets/images/corner-red-filled-1.svg"
          alt=""
          height="200"
          class="mt-minus2"
        />
      </div>
    </div>

    <div class="mt-minus5 row border-green-left-right">
      <big-logo />
    </div>

    <div class="row">
      <div class="column-left">
        <img
          src="~/assets/images/corner-red-filled-3.svg"
          alt=""
          height="200"
        />
      </div>

      <div class="column-right">
        <img
          src="~/assets/images/corner-green-line-2.svg"
          class="corner-align-right"
          alt=""
          height="200"
        />
      </div>
    </div>

    <div class="row flex mt-minus6">
      <div id="left-lower-logo" class="w-50">
        <div class="logo-border-bottom" />
        <img
          src="~/assets/images/corner-green-line-1.svg"
          class="logo-corner-green-bottom"
          alt=""
          height="200"
        />
      </div>

      <div id="right-lower-logo" class="w-50">
        <div class="ml-5 margin-corner-right">
          <span class="logo-claim"
            >Visualitäten von Geschlecht in deutsch&shy;sprachigen Comics</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('~/assets/css/styles.css');

.flex {
  display: flex;
}

.logo-corner-green-bottom {
  float: right;
  margin-top: -2px;
}

.column-left {
  float: left;
  box-sizing: border-box;
}

/* this class does not work correctly */
.column-center {
  display: flex;
  box-sizing: initial;
  width: calc(85% - 100px);
}

.column-right {
  float: right;
  box-sizing: border-box;
}

/* display flex here? */
.row:after {
  content: '';
  clear: both;
  display: table;
}

.mt-minus2 {
  margin-top: -2px;
}

.mt-minus5 {
  margin-top: -5px;
}

.mt-minus6 {
  margin-top: -6px;
}

.logo-claim {
  display: flex;
  margin-left: 10%;
  margin-top: 10%;

  font-family: var(--gc-font-family-outfit);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-46);
  line-height: var(--gc-line-spacing-60);
  letter-spacing: var(--gc-character-spacing-0);
  color: var(--gc-gray);
}
</style>
