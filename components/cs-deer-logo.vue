<script setup lang="ts">
type DeerLogoProps = {
  isFlipped?: boolean;
  height?: number;
};

withDefaults(
  defineProps<DeerLogoProps>(),
  {
    isFlipped: false,
    height: 64,
  },
);
</script>

<template>
  <img
    src="/img/deer-logo.png" class="deer" :class="{ flip: isFlipped }" alt="Deer Logo"
    :style="{ height: `${height}px` }" draggable="false"
  >
</template>

<style scoped lang="scss">
.deer {
  padding-inline: 0.5rem;

  &.flip {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}
</style>
