<script setup lang="ts">
const { t } = useI18n();
const title = t("brand_name");
useHead({
  title,
  titleTemplate: null,
});
</script>

<template>
  <div class="container">
    <BreakpointDetector />
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t("brand_name") }}</h1>
      </template>
    </CsArrowSeparator>
    <div class="intro-container">
      <NuxtImg
        class="intro-image"
        src="/img/single_arrow.webp"
        alt=""
        :width="1000"
        :height="667"
        sizes="xs:375px sm:576px md:768px lg:1000px"
        loading="eager"
        fetchpriority="high"
        format="webp"
        quality="85"
      />
      <div class="intro-text">
        <p>
          {{ $t("pages.index.intro.part_1") }}
        </p>
        <p>
          {{ $t("pages.index.intro.part_2") }}
        </p>
      </div>
    </div>
    <CsActivitiesCarousel />
    <CsNotificationModal />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-inline-size: 1000px;
  margin-inline: auto;
}

.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  flex-grow: 1;
  justify-content: space-evenly;
  text-align: justify;

  .intro-image {
    width: 100%;
    max-width: 95%;
    height: auto;
    aspect-ratio: 1000 / 667;
    object-fit: contain;
  }

  .intro-text {
    max-width: 95%;
  }

  // lg and up (>= 1000px)
  @media (min-width: 1000px) {
    flex-direction: row;

    .intro-image {
      max-width: 40%;
    }

    .intro-text {
      max-width: 50%;
    }
  }
}
</style>
