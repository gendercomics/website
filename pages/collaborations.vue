<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const index = await useAsyncData('doc', () =>
  queryContent('/collaborations').where({ type: 'index' }).findOne(),
)
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <content-renderer :value="index">
        <div class="titel-xl mt-3rem">{{ index.data.value.title }}</div>
        <content-renderer-markdown class="a" :value="index.data.value.body" />
      </content-renderer>

      <!-- Wissenschaftlicher Beirat -->
      <div>
        <h1 class="mt-3rem center">Wissenschaftlicher Beirat</h1>

        <divider-red-arrow />

        <div class="row-2">
          <div class="border-right">
            <archive-box-with-image
              category="Wissenschaftlicher Beirat"
              title="Anke Feuchtenberger"
              description="Lorem ipsum"
              img="advisory-board/anke-feuchtenberger.png"
            />
          </div>
          <div>
            <archive-box-with-image
              category="Wissenschaftlicher Beirat"
              title="Konstanze Fliedl"
              description="Lorem ipsum"
              img="advisory-board/konstanze-fliedl.png"
            />
          </div>
        </div>

        <divider b1 b2 t3 t4 b5 b6 />

        <div class="row-2">
          <div class="border-left">
            <archive-box-with-image
              category="Wissenschaftlicher Beirat"
              title="Ole Frahm"
              description="Lorem ipsum"
              img="advisory-board/ole-frahm.jpg"
            />
          </div>
          <div class="border-right">
            <archive-box-with-image
              category="Wissenschaftlicher Beirat"
              title="Elizabeth 'Biz' Nijdam"
              description="Lorem ipsum"
              img="advisory-board/elizabeth-nijdam.png"
            />
          </div>
        </div>

        <divider t1 b2 b3 />
        <divider-red-arrow up class="mt-0" />
      </div>

      <!-- Projekte und Institutionen -->
      <div>
        <h1 class="mt-3rem center">Projekte und Institutionen</h1>
        <divider-red-arrow />
      </div>

      <!-- verlage -->
      <div>
        <h1 class="mt-3rem center">Verlage</h1>
        <divider-red-arrow />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  justify-content: center;
}

.border-right {
  border-right: solid 2px var(--gc-green);
}

.border-left {
  border-left: solid 2px var(--gc-green);
}

.mt-0 {
  margin-top: 0;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
