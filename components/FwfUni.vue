<script setup>
import ImageBox from '~/components/ImageBox.vue'
import TextPreviewBox from '~/components/TextPreviewBox.vue'
</script>

<template>
  <div class="container-row">
    <div class="w-50 border-left">
      <div class="w-90">
        <div class="tag">Fördergeber</div>
        <div class="titel-kachel">FWF Der Wissenschaftsfonds</div>
        <a class="a">Projektnummer: P 31925</a>
        <a href="https://www.fwf.ac.at/" target="_blank">
          <img src="@/assets/images/logo-FWF.png" alt="FWF" class="mt-30" />
        </a>
      </div>
    </div>
    <div class="w-50">
      <div class="w-90">
        <div class="tag">Institution</div>
        <div class="titel-kachel">Universität Wien</div>
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
.container-row {
  display: flex;
  width: 100%;
}

.border-left {
  border-left-color: var(--gc-green);
  border-left-width: 2px;
  border-left-style: solid;
}
</style>
