<script setup lang="ts">
import type { Activity } from "./types";

const breakpoint = useBreakpoint();

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
      v-if="breakpoint.xs"
      height="380px"
      swipable
      draggable
      :indicators="false"
      :items="activities"
      color="primary"
      class="carousel"
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
    <div v-else class="activities-desktop">
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-inline-size: 1000px;
  margin-inline: auto;

  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-inline: auto;
    inline-size: 90%;
    max-inline-size: 90%;
    flex-grow: 1;

    .va-screen-md & {
      inline-size: 45%;
      max-inline-size: 45%;
    }

    .va-screen-lg &,
    .va-screen-xl & {
      inline-size: 30%;
      max-inline-size: 30%;
    }
  }
}

.carousel {
  box-shadow: none;
  position: relative;
  --va-carousel-background: --va-background-color-primary;
  inline-size: 80%;
  max-inline-size: 1000px;
  margin-inline: auto;
  padding-block-end: 3rem;
}
</style>
