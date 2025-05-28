<script setup lang="ts">
const breakpoint = useBreakpoint();

const showFullBranding = computed(() => breakpoint.smUp);

const computedHeight = computed(() => {
  return showFullBranding.value ? 64 : 32;
});
</script>

<template>
  <NuxtLink class="branding" to="/">
    <CsDeerLogo v-show="showFullBranding" :height="computedHeight" :is-flipped="true" />
    <div v-show="showFullBranding">
      <p>Csodaszarvas</p>
      <p>Íjászbarlang</p>
    </div>
    <CsDeerLogo :height="computedHeight" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Yeseva";
  src:
    url("~/assets/fonts/YesevaOne-Regular.ttf") format("ttf"),
    url("~/assets/fonts/YesevaOne-Regular.woff") format("woff");
}

.branding {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 1.25rem;
  white-space: nowrap;
  font-family: "Yeseva", serif;
  color: white;
  font-weight: 400;
  line-height: 1.5;

  p {
    margin: 0;
  }

  align-items: center;
  --va-font-family: "Yeseva", serif;
  padding-inline: 1rem;
  padding-block: 0.5rem;
}
</style>
