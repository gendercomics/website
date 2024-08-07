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
        <green-button text="GenderComics Team" link="/team" left-corner />
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
          rightCorner
        />
        <green-button
          text="Marina Rauchenbacher"
          link="/team/marina-rauchenbacher"
          rightCorner
        />
        <green-button
          text="Katharina Serles"
          link="/team/katharina-serles"
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
</style>

<i18n lang="yaml">
de:
  contact: Kontakt
  uni: Universität Wien
en:
  contact: Contact
  uni: University of Vienna
</i18n>
