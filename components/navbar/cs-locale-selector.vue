<script setup lang="ts">
const { locale, setLocale, availableLocales } = useI18n();
const breakpoints = useBreakpoint();
</script>

<template>
  <VaDropdown :offset="[breakpoints.xs ? 10 : 26, 0]">
    <template #anchor>
      <img
        :src="`/img/${locale}.png`"
        alt="Language Flag"
        height="28"
        width="28"
        :style="{ borderRadius: '50%' }"
      >
    </template>
    <VaDropdownContent class="dropdown-content">
      <VaButton
        v-for="loc in availableLocales"
        :key="loc"
        preset="plain"
        @click="setLocale(loc)"
      >
        <img
          :src="`/img/${loc}.png`"
          alt="Language Flag"
          height="22"
          width="36"
          :style="{ borderRadius: '5%' }"
        >
      </VaButton>
    </VaDropdownContent>
  </VaDropdown>
</template>

<style lang="scss" scoped>
.dropdown-content {
  --va-background-secondary: #000000c0;
  min-inline-size: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
