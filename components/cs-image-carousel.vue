<script setup lang="ts">
type Props = {
  items: string[];
};

defineProps<Props>();
</script>

<template>
  <VaCarousel
    swipable
    :indicators="false"
    :items="items"
    color="primary"
    class="carousel"
    autoscroll
    infinite
  >
    <template #prev-arrow>
      <Icon name="tabler:chevron-left" />
    </template>
    <template #next-arrow>
      <Icon name="tabler:chevron-right" />
    </template>
    <template #default="{ item }">
      <VaImage
        :src="item"
        :alt="item"
        class="image"
        fit="contain"
      />
    </template>
  </VaCarousel>
</template>

<style lang="scss" scoped>
.va-image {
  inline-size: 90%;
}

.carousel {
  box-shadow: none;
  max-block-size: 50vh;
  block-size: 50vh;
  position: relative;
  --va-carousel-background: --va-background-color-primary;
  inline-size: 80%;
  max-inline-size: 1000px;
  margin-inline: auto;
  --va-carousel-padding: 0;

  .va-screen-xs &,
  .va-screen-sm & {
    max-block-size: 35vh;
    block-size: 35vh;
  }
}

.va-button {
  border: none;
}
</style>
