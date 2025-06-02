<script setup lang="ts">
const breakpoint = useBreakpoint();

const showFullBranding = computed(() => breakpoint.smUp);

const computedHeight = computed(() => {
  return showFullBranding.value ? 64 : 32;
});
</script>

<template>
  <NuxtLinkLocale class="branding" to="/">
    <CsDeerLogo v-show="showFullBranding" :height="computedHeight" :is-flipped="true" />
    <div v-show="showFullBranding">
      <p>Csodaszarvas</p>
      <p>Íjászbarlang</p>
    </div>
    <CsDeerLogo :height="computedHeight" />
  </NuxtLinkLocale>
</template>

<style lang="scss" scoped>
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
