<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import type { QueryBuilderParams } from '@nuxt/content/types'
import ImageBox from '~/components/ImageBox.vue'

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
    <div>
      <div class="column">
        <content-renderer :value="index">
          <div class="titel-xl mt-3rem">{{ index.data.value.title }}</div>
          <content-renderer-markdown class="a" :value="index.data.value.body" />
        </content-renderer>

        <divider-red-arrow />
      </div>

      <content-list :query="memberQuery" v-slot="{ list }">
        <div v-for="(member, index) in list" :key="member._path">
          <div class="row" :class="{ 'border-left': index % 2 != 0 }">
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
                        <div class="tag">{{ member.team }}</div>
                        <div class="titel-kachel">{{ member.title }}</div>
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
                class="mr-2"
                v-if="index % 2 != 0"
                :img="member.img"
                width="60%"
                :caption="member.title"
                :caption-link="member.route"
                :btn-arrow="false"
              />
              <div v-if="index % 2 === 0">
                <div class="container-row">
                  <div class="column">
                    <div class="w-90">
                      <content-renderer :value="member">
                        <div class="tag">{{ member.team }}</div>
                        <div class="titel-kachel">{{ member.title }}</div>
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

          <div v-if="index % 2 === 0 && index < list.length - 1">
            <divider b1 b2 t3 t4 b5 b6 />
          </div>
          <div v-else-if="index % 2 != 0">
            <divider t1 b2 b3 />
          </div>
        </div>
      </content-list>
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

.a strong {
  font-weight: var(--gc-font-weight-600);
}

.border-right {
  border-right: 2px solid var(--gc-green);
  margin-right: -1px;
}

.border-left {
  border-left: 2px solid var(--gc-green);
  margin-left: 0;
}

.column {
  display: flex;
  flex-direction: column;
}

.mt-1rem {
  margin-top: 1rem;
}

.mr-2 {
  margin-right: 2px;
}
</style>
