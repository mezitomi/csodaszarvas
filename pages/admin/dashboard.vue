<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["route"],
});
const { t } = useI18n();
const title = t("brand_name");
useHead({
  title,
  titleTemplate: null,
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
