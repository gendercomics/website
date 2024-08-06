<script setup lang="ts"></script>

<template>
  <div class="flex center">
    <div class="cell">
        <img
          src="@/assets/images/arrow-green-up-flat.svg"
          alt=""
          class="width-50px"
        />
        <green-button text="Coming soon ..." class="btn-font"/>
        <img
          src="@/assets/images/arrow-green-down-flat.svg"
          alt=""
          class="width-50px"
        />
      </div>
  </div>
</template>

<style scoped>
.center {
  justify-content: center;
}

.cell {
  display: grid;
  justify-items: center;
}

.width-50px {
  width: 50px;
}

</style>
