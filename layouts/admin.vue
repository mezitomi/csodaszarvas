<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="header">
      <CsNavbar />
    </div>
    <div class="body">
      <div class="sidebar">
        <CsSidebar />
      </div>
      <div class="main">
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  inline-size: 100%;
  block-size: 80px;
}
.body {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  block-size: 100%;
}

.main {
  width: 90%;
  max-width: 1400px;
  margin: auto;
  margin-block-start: 0px;
}

.sidebar {
}

body {
  margin: 0;
}
</style>
