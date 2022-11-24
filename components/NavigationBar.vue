<template>
  <div class="nav-sticky d-flex">
    <burger />
    <div
      v-if="$store.getters['modules/navigation/isNavbarVisible']"
      class="gc-nav-bar"
    >
      <b-navbar>
        <b-navbar-brand>
          <NuxtLink to="/">
            <b-img
              src="~assets/images/logo-gendercomics-h.svg"
              class="gc-nav-bar-brand-img"
            />
          </NuxtLink>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <div v-if="$store.getters['modules/navigation/isNavbarVisible']">
      <img
        src="~assets/images/arrow-green-down-flat.svg"
        class="arrow-center"
      />
      <img src="~assets/images/arrow-green-down-flat.svg" class="arrow-right" />
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
  z-index: 999;
}

.gc-nav-bar-brand-img {
  position: absolute;
  margin-left: 2em;
  top: 40px;
  transform: translateY(-50%);
}

.nav-sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.arrow-center {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%);
}

.arrow-right {
  position: absolute;
  right: 75px;
  top: 80px;
}
</style>
