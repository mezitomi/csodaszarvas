<script setup lang="ts">
const localePath = useLocalePath();
const handleError = () => clearError({ redirect: localePath("index") });
useHead({
  title: "403",
});
</script>

<template>
  <div class="container">
    <h2>
      {{ $t("pages.403.title") }}
    </h2>
    <h3>{{ $t("pages.403.subtitle") }}</h3>
    <VaButton @click="handleError">
      {{ $t("pages.403.backToHome") }}
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
