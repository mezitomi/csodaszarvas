<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="container">
    <CsNavbar />
    <main>
      <CsSubcover />
      <slot />
      <SpeedInsights />
      <Analytics />
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
