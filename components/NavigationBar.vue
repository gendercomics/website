<template>
  <div class="nav-sticky">
    <b-navbar class="gc-nav-bar" sticky>
      <b-navbar-brand>
        <b-img
          src="~assets/images/logo-gendercomics-h.png"
          class="gc-nav-bar-brand-img"
        />
      </b-navbar-brand>
    </b-navbar>
    <div>
      <div class="arrow-center">
        <img src="~assets/images/arrow-green-down-flat.png" />
      </div>
      <img src="~assets/images/arrow-green-down-flat.png" class="arrow-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
.gc-nav-bar {
  background: var(--gc-green) 0% 0% no-repeat padding-box;
  position: sticky;
  left: 10%;
  width: 90%;
  height: 80px;
  border-radius: 0px 0px 100px 100px;
  opacity: 1;
}

.gc-nav-bar-brand-img {
  margin-left: 10%;
}

.nav-sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.arrow-center {
  text-align: center;
}

.arrow-right {
  position: absolute;
  right: 75px;
  top: 80px;
}
</style>
