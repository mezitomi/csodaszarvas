<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});

const localePath = useLocalePath();

const handleError = () => clearError({ redirect: localePath("index") });
</script>

<template>
  <div>
    <h2>
      Oh snap! Something went wrong.
      {{ error?.statusCode }}
    </h2>
    <VaButton @click="handleError">
      {{ $t("navbar.index") }}
    </VaButton>
  </div>
</template>
