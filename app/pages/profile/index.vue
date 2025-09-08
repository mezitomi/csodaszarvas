<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";

const authStore = useAuthStore();
const { t } = useI18n();
const title = t("brand_name");
useHead({
  title,
  titleTemplate: null,
});
</script>

<template>
  <div>
    <p>
      You are logged in as {{ authStore.user?.name }}
    </p>
    <VaButton @click="authStore.signOut">
      Kijelentkezés
    </VaButton>
  </div>
</template>
