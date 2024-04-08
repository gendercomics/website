<script setup>
const searchInput = defineModel()
function resetInput() {
  searchInput.value = ''
}
</script>

<template>
  <div>
    <img src="@/assets/images/corner-green-line-3-100px.svg" alt="" />
    <div class="input-container">
      <label for="inputField" class="label">Filter</label>
      <input
        type="text"
        id="inputField"
        placeholder="Type to search"
        v-model="searchInput"
      />
      <img
        class="reset-btn"
        src="@/assets/images/burger-close.svg"
        alt="reset"
      />
      <img
        class="reset-btn-hover"
        src="@/assets/images/burger-close-hover.svg"
        alt="reset"
        @click="resetInput"
      />
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  width: auto;
  margin-left: 100px;
  margin-top: -40px;
}

.input-container label {
  background-color: var(--gc-red);
  color: var(--white);
  border-radius: 100px 0 0 100px;
  font-family: var(--gc-font-family-outfit);
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-25);
  line-height: var(--gc-line-spacing-34);
  width: auto;
  padding-right: 10px;
}

.input-container input[type='text'] {
  width: calc(100% - 150px);
  padding: 10px;
  border-radius: 0 100px 100px 0;
  border: 2px solid var(--gc-red);
  box-sizing: border-box;
  font-family: var(--gc-font-family-george-rounded);
  font-size: var(--gc-font-size-35);
  font-weight: var(--gc-font-weight-normal);
  font-style: var(--gc-font-style-italic);
  color: var(--gc-gray);
  line-height: var(--gc-line-spacing-34);
  letter-spacing: var(--gc-character-spacing-0);
}

.input-container input[type='text'] {
  width: calc(100% - 150px);
  padding: 10px;
  border-radius: 0 100px 100px 0;
  border: 2px solid var(--gc-red);
  box-sizing: border-box;
  font-family: var(--gc-font-family-george-rounded);
  font-size: var(--gc-font-size-35);
  font-weight: var(--gc-font-weight-normal);
  font-style: var(--gc-font-style-italic);
  color: var(--gc-gray);
  line-height: var(--gc-line-spacing-34);
  letter-spacing: var(--gc-character-spacing-0);
  outline: none;
}

.input-container input[type='text']:hover {
  box-shadow: 0 0 40px 0 var(--gc-red);
  transition: ease-out;
  transition-duration: 0.6s;
}

.input-container input[type='text']:focus {
  box-shadow: 0 0 40px 0 var(--gc-red);
  transition: ease-out;
  transition-duration: 1s;
}

.reset-btn {
  position: relative;
  right: 60px;
  top: 27px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  scale: 80%;
}

.reset-btn:hover {
  opacity: 0;
}

.reset-btn-hover {
  position: relative;
  right: 110px;
  top: 27px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  scale: 80%;
  opacity: 0;
}

.reset-btn-hover:hover {
  opacity: 1;
}

.label {
  background: var(--gc-red) 0 0 no-repeat padding-box;
  border-radius: 100px 0 0 100px;
  opacity: 1;
  font-family: var(--gc-font-family-outfit);
  align-content: center;
  width: 50px;
  padding-left: 15px;
}
</style>
