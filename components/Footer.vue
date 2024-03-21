<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <div class="footer">
    <img
      src="~/assets/images/arrow-gray-up-flat.svg"
      class="d-block m-auto"
      alt=""
    />
    <div class="footer-block">
      <div class="footer-element">
        &copy; {{ year }} GenderComics - Alle Rechte vorbehalten
      </div>
      <NuxtLink to="/imprint" class="footer-element">Impressum</NuxtLink>
      <NuxtLink to="/privacy" class="footer-element">Datenschutz</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.d-block {
  display: block;
}

a:link {
  text-decoration: none;
}

a:hover {
  color: var(--gc-green);
}

.m-auto {
  margin: auto;
}

.footer {
  clear: both;
}

.footer-block {
  display: grid;
  grid-template-columns: auto auto auto;
  height: 75px;
  background-color: var(--gc-gray);
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: var(--gc-font-family-outfit);
  font-weight: var(--gc-font-weight-300);
  font-size: var(--gc-font-size-16);
}

.footer-element {
  flex: 1;
  text-align: center;
  color: var(--lightgray);
  padding-left: 20px;
  padding-right: 20px;
}
</style>
