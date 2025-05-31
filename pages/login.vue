<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import CsGoogleAuthButton from "~/components/cs-google-auth-button.vue";

const authStore = useAuthStore();
if (authStore.user) {
  // Redirect to profile page if already authenticated
  navigateTo("/profile");
}
</script>

<template>
  <p>
    <CsGoogleAuthButton />
  </p>
</template>
