<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";

import CsGoogleAuthButton from "~/components/cs-google-auth-button.vue";

const localePath = useLocalePath();

const authStore = useAuthStore();
if (authStore.user) {
  // Redirect to profile page if already authenticated
  navigateTo(localePath("profile"));
}

const { t } = useI18n();
const title = t("brand_name");
useHead({
  title,
  titleTemplate: null,
});
</script>

<template>
  <p>
    <CsGoogleAuthButton />
  </p>
</template>
