<template>
  <div>
    <b-container class="gc-w-90 d-flex mx-auto">
      <b-container class="w-50">
        <divider position="left" direction="4" />
      </b-container>
      <b-container class="w-50" />
    </b-container>

    <b-container class="gc-w-90 d-flex mx-auto">
      <b-container class="w-50 column gc-border-left">
        <span class="d-block tag">Fördergeber</span>
        <span class="d-block titel-kachel">FWF Der Wissenschaftsfonds</span>
        <span class="d-block sub-heading">Projektnummer: P 31925</span>
        <img class="pt-4" src="~assets/images/logo-FWF.png" />
      </b-container>
      <b-container class="w-50">
        <span class="d-block tag">Institution</span>
        <span class="d-block titel-kachel">Universität Wien</span>
        <span class="d-block sub-heading">Institut für Germanistik</span>
        <img class="pt-4" src="~assets/images/logo-UniWien-gray.png" />
      </b-container>
    </b-container>
    <b-container class="gc-w-90 d-flex mx-auto">
      <b-container class="w-50">
        <divider position="left" direction="3" />
      </b-container>
      <b-container class="w-50" />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SectionTwoCols'
}
</script>

<style scoped></style>
