<script setup lang="ts">
const authStore = useAuthStore();
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
