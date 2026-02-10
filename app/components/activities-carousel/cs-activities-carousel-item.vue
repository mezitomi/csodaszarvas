<script setup lang="ts">
import type { Activity } from "./types";

type Props = {
  value: Activity;
};
const props = defineProps<Props>();

const imageSrc = computed(() => {
  return `/img/activities/${props.value.key}.webp`;
});
</script>

<template>
  <div class="container">
    <NuxtImg
      class="image"
      :src="imageSrc"
      :alt="$t(`pages.index.what_we_do.activities.${props.value.key}.subtitle`)"
      preset="carousel"
      :width="400"
      :height="400"
      sizes="xs:170px sm:170px md:170px lg:170px"
      loading="lazy"
    />
    <div class="text">
      <h3>{{ $t(`pages.index.what_we_do.activities.${props.value.key}.subtitle`) }}</h3>
      <p>{{ $t(`pages.index.what_we_do.activities.${props.value.key}.text`) }}</p>
    </div>
    <VaButton v-if="value.link">
      <NuxtLinkLocale class="link" :to="value.link">
        {{ $t("pages.index.what_we_do.more_info") }}
      </NuxtLinkLocale>
    </VaButton>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  block-size: 100%;
  transition: all 0.5s;
}

.link {
  color: var(--va-color-primary);
  text-decoration: none;
}

.image {
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  background-size: cover;
  margin-block-end: 1.25rem;

  inline-size: 170px;
  block-size: 170px;
}

.text {
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  inline-size: 100%;

  p,
  h3 {
    white-space: pre-wrap;
  }
}
</style>
