<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="container">
    <h2>
      {{ $t("pages.404.title") }}
    </h2>
    <h3>{{ $t("pages.404.subtitle") }}</h3>
    <img src="/img/404.png" alt="404 Not Found">
    <VaButton :to="localePath('/')">
      {{ $t("pages.404.backToHome") }}
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
