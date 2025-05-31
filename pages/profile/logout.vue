<script setup lang="ts">
const authStore = useAuthStore();
authStore.signOut();
</script>

<template>
  <div>
    You are about to be logged out.
    <VaProgressCircle color="secondary" thickness="0.3" indeterminate />
  </div>
</template>
