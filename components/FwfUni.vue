<script setup>
import ImageBox from '~/components/ImageBox.vue'
import TextPreviewBox from '~/components/TextPreviewBox.vue'
</script>

<template>
  <div class="container">
    <div class="w-50 border-left">
      <div class="w-90">
        <p class="tag">Fördergeber</p>
        <p class="titel-kachel">FWF Der Wissenschaftsfonds</p>
        <a class="a">Projektnummer: P 31925</a>
        <a href="https://www.fwf.ac.at/" target="_blank">
          <img src="@/assets/images/logo-FWF.png" alt="FWF" class="mt-30" />
        </a>
      </div>
    </div>
    <div class="w-50">
      <div class="w-90">
        <p class="tag">Institution</p>
        <p class="titel-kachel">Universität Wien</p>
        <a class="a">Institut für Germanistik</a>
        <a href="https://germanistik.univie.ac.at/" target="_blank">
          <img
            src="~assets/images/logo-UniWien-gray.png"
            alt="UNI"
            class="mt-30"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.border-left {
  border-left-color: var(--gc-green);
  border-left-width: 2px;
  border-left-style: solid;
}
</style>
