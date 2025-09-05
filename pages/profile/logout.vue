<script setup lang="ts">
const authStore = useAuthStore();
authStore.signOut();
const { t } = useI18n();
const title = t("brand_name");
useHead({
  title,
  titleTemplate: null,
});
</script>

<template>
  <div>
    You are about to be logged out.
    <VaProgressCircle
      color="secondary"
      thickness="0.3"
      indeterminate
    />
  </div>
</template>
