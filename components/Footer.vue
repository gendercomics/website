<template>
  <div class="footer">
    <img src="~assets/images/arrow-gray-up-flat.png" class="d-block m-auto" />
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
