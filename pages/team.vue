<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
</script>

<template>
  <div class="container">
    <div class="column">
      <div class="titel-xl mt-3rem">Team.</div>
      <div class="a">
        Das sind <strong>die Menschen</strong> hinter GenderComics.
      </div>
      <divider-red-arrow />
      <preview
        img="team/susanne-hochreiter.png"
        img-width="65%"
        content="team/susanne-hochreiter"
        img-caption="Susanne Hochreiter"
        img-caption-link="/team/susanne-hochreiter"
        :img-col=1
      />
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

.mt-3rem {
  margin-top: 3rem;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}
</style>
