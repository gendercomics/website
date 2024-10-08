<script setup>
import GreenButton from '~/components/GreenButton.vue'

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="container-row">
    <div class="w-50">
      <div class="w-90">
        <div class="titel-xl">{{ t('contact') }}</div>
        <green-button
          text="GenderComics Team"
          link="/team"
          left-corner
          target="_self"
        />
      </div>
    </div>
    <div class="w-50 border-right flex">
      <div class="left-col">
        <div class="tag">{{ t('contact') }}</div>
        <div class="titel-kachel">GenderComics</div>
        <div class="address-block mt-30">
          <a class="a">{{ t('uni') }}</a>
          <a class="a">Universitätsring 1</a>
          <a class="a">1010 Wien</a>
        </div>
        <div class="address-block mt-30">
          <a class="link-passiv no-deco" href="mailto:contact@gendercomics.net"
            >contact@gendercomics.net</a
          >
        </div>
      </div>
      <div class="right-col">
        <green-button
          class="p-10"
          text="Susanne Hochreiter"
          link="mailto:susanne.hochreiter@univie.ac.at"
          rightCorner
        />
        <green-button
          class="p-10"
          text="Marina Rauchenbacher"
          link="mailto:rauchenbacher@mdw.ac.at"
          rightCorner
        />
        <green-button
          class="p-10"
          text="Katharina Serles"
          link="mailto:katharina.serles@univie.ac.at"
          rightCorner
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-row {
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

.p-10 {
  padding-top: 10px;
  padding-bottom: 10px;
}

.no-deco {
  text-decoration: none;
}
</style>

<i18n lang="yaml">
de:
  contact: Kontakt
  uni: Universität Wien
en:
  contact: Contact
  uni: University of Vienna
</i18n>
