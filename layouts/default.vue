<script setup lang="ts">
</script>

<template>
  <div class="container">
    <CsNavbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body {
  margin: 0;
}
</style>
