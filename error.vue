<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const localePath = useLocalePath();
if (props.error?.statusCode === 404) {
  clearError({ redirect: localePath("/404") });
}

if (props.error?.statusCode === 403) {
  clearError({ redirect: localePath("/403") });
}
const handleError = () => clearError({ redirect: localePath("index") });
</script>

<template>
  <div class="container">
    <h2>
      {{ $t("pages.error.title") }}
    </h2>
    <h3>{{ $t("pages.error.subtitle") }}</h3>
    <VaButton @click="handleError">
      {{ $t("pages.error.backToHome") }}
    </VaButton>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    inline-size: 30%;
  }
}
</style>
