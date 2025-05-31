<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <VaButton
    @click="authStore.googleSignIn"
  >
    Login with Google
    <VaProgressCircle v-if="authStore.loading" color="secondary" size="1rem" thickness="0.3" indeterminate />
    <Icon v-else name="tabler:brand-google" />
  </VaButton>
</template>
