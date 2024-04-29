<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <div class="titel-xl mt-3rem">Team.</div>
      <div class="a">
        Das sind <strong>die Menschen</strong> hinter GenderComics.
      </div>
      <divider-red-arrow />
      <div class="row">
        <preview
          img="team/susanne-hochreiter.png"
          img-width="65%"
          content="team/susanne-hochreiter"
          img-caption="Susanne Hochreiter"
          img-caption-link="/team/susanne-hochreiter"
          :img-col=1
        />
      </div>
      <divider b1 b2 t3 t4 b5 b6 />
      <div class="row">
        <preview
          img="team/marina-rauchenbacher.png"
          img-width="65%"
          content="team/marina-rauchenbacher"
          img-caption="Marina Rauchenbacher"
          img-caption-link="/team/marina-rauchenbacher"
          :img-col="2"
        />
      </div>
      <divider t1 b2 b3 />
      <!--
      <div class="row">
        <preview
          img="team/katharina-serles.png"
          img-width="65%"
          content="team/katharina-serles"
          img-caption="Katharina Serles"
          img-caption-link="/team/katharina-serles"
          :img-col="1"
        />
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.mt-3rem {
  margin-top: 3rem;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}
</style>
