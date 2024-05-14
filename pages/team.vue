<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import type { QueryBuilderParams } from '@nuxt/content/types'
import ImageBox from '~/components/ImageBox.vue'
import TextPreviewBox from '~/components/TextPreviewBox.vue'

const memberQuery: QueryBuilderParams = {
  path: '/team',
  where: [{ type: 'member' }],
}

const index = await useAsyncData('doc', () =>
  queryContent('/team').where({ title: 'Team.' }).findOne(),
)
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <content-renderer :value="index">
        <div class="titel-xl mt-3rem">{{ index.data.value.title }}</div>
        <content-renderer-markdown class="a" :value="index.data.value.body" />
      </content-renderer>

      <divider-red-arrow />

      <content-list :query="memberQuery" v-slot="{ list }">
        <div v-for="(member, index) in list" :key="member._path">
          <div class="row">
            <div class="w-50">
              <ImageBox
                v-if="index % 2 === 0"
                class="border-right"
                :img="member.img"
                width="60%"
                :caption="member.title"
                :caption-link="member.route"
              />
              <div v-else-if="index % 2 != 0">
                <div class="container-row">
                  <div class="column">
                    <div class="w-90">
                      <content-renderer :value="member">
                        <p class="tag">{{ member.team }}</p>
                        <p class="titel-kachel">{{ member.title }}</p>
                        <content-renderer-markdown
                          class="a mt-1rem"
                          :value="member"
                          excerpt
                        />
                      </content-renderer>
                      <button-gray
                        class="mt-1rem"
                        text="mehr erfahren"
                        :link="member.route"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-50">
              <ImageBox
                v-if="index % 2 != 0"
                class="border-right"
                :img="member.img"
                width="60%"
                :caption="member.title"
                :caption-link="member.route"
              />
              <div v-if="index % 2 === 0">
                <div class="container-row">
                  <div class="column">
                    <div class="w-90">
                      <content-renderer :value="member">
                        <p class="tag">{{ member.team }}</p>
                        <p class="titel-kachel">{{ member.title }}</p>
                        <content-renderer-markdown
                          class="a mt-1rem"
                          :value="member"
                          excerpt
                        />
                      </content-renderer>
                      <button-gray
                        class="mt-1rem"
                        text="mehr erfahren"
                        :link="member.route"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </content-list>

      <!--
      <divider b1 b2 t3 t4 b5 b6 />

      <divider t1 b2 b3 />
      -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.mt-3rem {
  margin-top: 3rem;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}

.border-right {
  border-right: 2px solid var(--gc-green);
  margin-right: -1px;
}

.container-row {
  display: flex;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}

.mt-1rem {
  margin-top: 1rem;
}
</style>
