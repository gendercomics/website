<template>
  <div class="gc-page-margin">
    <b-row class="d-flex" no-gutters>
      <b-col class="gc-col">
        <span class="d-block titel-xl">Kontakt</span>
        <button-green text="GenderComics Team" left link="/team" />
      </b-col>
      <b-col class="gc-col gc-border-right">
        <span class="d-block tag">Kontakt</span>
        <span class="d-block titel-kachel">GenderComics</span>
        <b-row class="pt-4">
          <b-col>
            <div>
              <span class="a d-block">Universität Wien</span>
              <span class="a d-block">Universitätsring 1</span>
              <span class="a d-block">1010 Wien</span>
            </div>
            <div class="pt-4">
              <span class="d-block link-passiv">+43 1 4277 0</span>
              <a
                class="d-block link-passiv"
                href="mailto:contact@gendercomics.net"
                >contact@gendercomics.net</a
              >
            </div>
          </b-col>
          <b-col>
            <div class="text-right">
              <button-green
                right
                text="Susanne Hochreiter"
                link="mailto:susanne.hochreiter@univie.ac.at"
              />
              <button-green
                right
                text="Marina Rauchenbacher"
                link="mailto:marina.rauchenbacher@univie.ac.at"
              />
              <button-green
                right
                text="Katharina Serles"
                link="mailto:katharina.serles@univie.ac.at"
              />
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
