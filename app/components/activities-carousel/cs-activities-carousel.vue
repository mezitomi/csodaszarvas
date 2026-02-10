<script setup lang="ts">
import type { Activity } from "./types";

const activities: Activity[] = [
  {
    key: "renting",
    link: "range",
  },
  {
    key: "teambuilding",
    link: null,
  },
  {
    key: "teaching",
    link: null,
  },
  {
    key: "association",
    link: "association",
  },
  {
    key: "crafting",
    link: null,
  },
];
</script>

<template>
  <div class="activities-carousel-container">
    <CsArrowSeparator class="separator">
      <h2>{{ $t('pages.index.what_we_do.title') }}</h2>
    </CsArrowSeparator>

    <VaCarousel
      height="380px"
      swipable
      draggable
      :indicators="false"
      :items="activities"
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
        <CsActivitiesCarouselItem :value="item" />
      </template>
    </VaCarousel>
    <div class="activities-desktop">
      <CsActivitiesCarouselItem
        v-for="item in activities"
        :key="item.key"
        :value="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.separator {
  inline-size: 90%;
  margin-inline: auto;
}

.activities-carousel-container {
  padding-block-start: 3rem;
}

.activities-desktop {
  display: none; // Hidden on mobile (xs)
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-inline-size: 1000px;
  margin-inline: auto;

  // Show desktop grid on sm and up (>= 576px)
  @media (min-width: 576px) {
    display: flex;
  }

  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-inline: auto;
    inline-size: 90%;
    max-inline-size: 90%;
    flex-grow: 1;

    @media (min-width: 768px) {
      inline-size: 45%;
      max-inline-size: 45%;
    }

    @media (min-width: 1000px) {
      inline-size: 30%;
      max-inline-size: 30%;
    }
  }
}

.carousel {
  display: block; // Visible on mobile (xs)

  // Hide carousel on sm and up (>= 576px)
  @media (min-width: 576px) {
    display: none;
  }

  box-shadow: none;
  position: relative;
  --va-carousel-background: --va-background-color-primary;
  inline-size: 80%;
  max-inline-size: 1000px;
  margin-inline: auto;
  padding-block-end: 3rem;
}
</style>
