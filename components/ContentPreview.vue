<script>
export default {
  props: {
    member: {},
  },
}
</script>

<template>
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
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}

.column {
  display: flex;
  flex-direction: column;
}

.mt-1rem {
  margin-top: 1rem;
}
</style>
