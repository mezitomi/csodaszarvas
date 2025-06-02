<script setup lang="ts">
const { locale, setLocale } = useI18n();

const flagImageSrc = computed(() => {
  return locale.value === "en" ? "/img/hu.png" : "/img/en.png";
});

function switchLocale() {
  const newLocale = locale.value === "en" ? "hu" : "en";
  setLocale(newLocale);
}
</script>

<template>
  <VaNavbarItem>
    <VaButton preset="plain" @click.prevent.stop="switchLocale">
      <img :src="flagImageSrc" alt="Language Flag" height="24">
    </VaButton>
  </VaNavbarItem>
</template>

<style lang="scss" scoped>
.va-button {
  padding: 0;
}
</style>
