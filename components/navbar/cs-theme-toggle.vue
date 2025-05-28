<script setup lang="ts">
const { applyPreset, currentPresetName } = useColors();

const colorTheme = computed({
  get: () => currentPresetName.value,
  set: (value: "dark" | "light") => {
    applyPreset(value);
  },
});
</script>

<template>
  <div class="theme-toggler">
    <VaSwitch
      v-model="colorTheme"
      off-color="#23181a"
      color="#d2c5b8"
      style="--va-switch-checker-background-color: #252723;"
      true-value="dark"
      false-value="light"
    >
      <template #innerLabel>
        <Icon
          :name="colorTheme === 'dark' ? 'tabler:sun' : 'tabler:moon'"
        />
      </template>
    </VaSwitch>
  </div>
</template>

<style lang="scss" scoped>
.theme-toggler {
  padding-inline-end: 1rem;
}
</style>
