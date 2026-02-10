<script setup lang="ts">
type DeerLogoProps = {
  isFlipped?: boolean;
};

withDefaults(
  defineProps<DeerLogoProps>(),
  {
    isFlipped: false,
  },
);
</script>

<template>
  <img
    src="/img/deer-logo.png"
    class="deer"
    :class="{ flip: isFlipped }"
    alt="Deer Logo"
    draggable="false"
  >
</template>

<style scoped lang="scss">
.deer {
  padding-inline: 0.5rem;
  height: 32px;

  @media (min-width: 576px) {
    height: 64px;
  }

  &.flip {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}
</style>
