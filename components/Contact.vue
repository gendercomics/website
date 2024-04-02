<script setup></script>

<template>
  <div class="container">
    <div class="w-50">
      <div class="w-90">
        <p class="titel-xl">Kontakt</p>
        <!-- button-green -->
      </div>
    </div>
    <div class="w-50 border-right flex">
      <div class="left-col">
        <p class="tag">Kontakt</p>
        <p class="titel-kachel">GenderComics</p>
        <div class="address-block mt-30">
          <a class="a">Universität Wien</a>
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
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.left-col {
  flex: 1;
}

.right-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
