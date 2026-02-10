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
    <template #default="{ item, index }">
      <NuxtImg
        :src="item"
        :alt="item"
        class="image"
        preset="hero"
        sizes="xs:375px sm:576px md:768px lg:800px"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : undefined"
      />
    </template>
  </VaCarousel>
</template>

<style lang="scss" scoped>
.image {
  width: 90%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
  display: block;
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

  // Mobile: smaller carousel height for phones
  @media (max-width: 575px) {
    max-block-size: 35vh;
    block-size: 35vh;
  }
}

.va-button {
  border: none;
}
</style>
