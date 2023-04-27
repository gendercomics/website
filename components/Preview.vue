<template>
  <div class="gc-page-margin">
    <b-row class="d-flex" no-gutters>
      <b-col class="gc-col gc-border-right">
        image
      </b-col>
      <b-col class="gc-col">
        <span class="d-block tag">About</span>
        <!-- span class="d-block titel-kachel">Zusammenfassung</span -->
        <b-row class="pt-4">
          <span class="a">
            <b>Ein Grundlagenforschungsprojekt</b>, das die
            Bedingungen, Eigenschaften und Strukturen von Visualitäten von
            Geschlecht untersucht. Es ist die erste systematische Analyse
            deutschsprachiger Comics in diesem Umfang.
          </span>
          <button-gray left link="/about" />
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    content: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped />
