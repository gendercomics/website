<template>
  <div class="footer">
    <img src="~assets/images/arrow-gray-up-flat.svg" class="d-block m-auto" />
    <b-nav class="mx-auto footer-nav">
      <b-nav-item disabled
        >&copy; {{ $moment().format('YYYY') }} GenderComics - Alle Rechte
        vorbehalten</b-nav-item
      >
      <b-nav-item>Impressum</b-nav-item>
      <b-nav-item>Datenschutz</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-nav {
  background: var(--gc-gray) 0% 0% no-repeat padding-box;
  background-size: 100%;

  height: 100px;

  font-family: var(--gc-font-family-outfit);
  font-size: var(--gc-font-size-18);

  justify-content: center;
  align-items: center;

  opacity: 1;
}
</style>
