<script setup>
import GreenButton from '~/components/GreenButton.vue'
</script>

<template>
  <div class="container">
    <div class="w-50">
      <div class="w-90">
        <p class="titel-xl">Kontakt</p>
        <green-button text="GenderComics Team" link="/team" left />
      </div>
    </div>
    <div class="w-50 border-right flex">
      <div class="left-col">
        <p class="tag">Kontakt</p>
        <p class="titel-kachel">GenderComics</p>
        <div class="address-block mt-30">
          <a class="a">Universität Wien</a>
          <a class="a">Universitätsring 1</a>
          <a class="a">1010 Wien</a>
        </div>
        <div class="address-block mt-30">
          <a class="link-passiv">+43 1 4277 0</a>
          <a class="link-passiv" href="mailto:contact@gendercomics.net"
            >contact@gendercomics.net</a
          >
        </div>
      </div>
      <div class="right-col">
        <green-button
          text="Susanne Hochreiter"
          link="/team/susanne-hochreiter"
          right
        />
        <green-button
          text="Marina Rauchenbacher"
          link="/team/marina-rauchenbacher"
          right
        />
        <green-button
          text="Katharina Serles"
          link="/team/katharina-serles"
          right
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.left-col {
  flex: 1;
  padding-left: 1.5rem;
}

.right-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.address-block a {
  display: block;
}

.border-right {
  border-right-color: var(--gc-green);
  border-right-width: 2px;
  border-right-style: solid;
}
</style>
