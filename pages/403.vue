<script setup lang="ts">
const localePath = useLocalePath();
const handleError = () => clearError({ redirect: localePath("index") });
</script>

<template>
  <div>
    <h2>
      Oh snap! You don't have permission to access this page.
    </h2>
    <VaButton @click="handleError">
      {{ $t("navbar.index") }}
    </VaButton>
  </div>
</template>
