<script setup lang="ts">
const images = [
  "/img/range/range1.webp",
  "/img/range/range2.webp",
  "/img/range/range3.webp",
];
const localePath = useLocalePath();
const { t } = useI18n();
const title = t("pages.range.title");
useHead({
  title,
});
</script>

<template>
  <div>
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t('pages.range.title') }}</h1>
      </template>
    </CsArrowSeparator>
    <div>
      <div class="description">
        <p>{{ $t('pages.range.details.part_1') }}</p>
        <p>{{ $t('pages.range.details.part_2') }}</p>
        <p>{{ $t('pages.range.details.part_3') }}</p>
        <ul>
          <li>{{ $t('pages.range.terms.part_1') }}</li>
          <li>{{ $t('pages.range.terms.part_2') }}</li>
          <li>{{ $t('pages.range.terms.part_3') }}</li>
          <li>{{ $t('pages.range.terms.part_4') }}</li>
          <li>{{ $t('pages.range.terms.part_5') }}</li>
          <li>{{ $t('pages.range.terms.part_6') }}</li>
        </ul>
        <p>
          {{ $t('pages.range.contact.text') }}
          <NuxtLinkLocale
            :to="localePath('contact')"
            class="link"
          >
            {{ $t('pages.range.contact.link') }}
          </NuxtLinkLocale>
        </p>
        <p>{{ $t('pages.range.farewell') }}</p>
      </div>
    </div>
    <div class="images">
      <CsImageCarousel :items="images" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  padding-block: 2rem;
}

.description {
  inline-size: 80%;
  margin-inline: auto;
  max-inline-size: 1000px;
  text-align: justify;
}

.images {
  max-inline-size: 1000px;
  inline-size: 80%;
  margin: auto;
  padding-block-end: 1rem;
}
</style>
