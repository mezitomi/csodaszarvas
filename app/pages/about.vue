<script setup lang="ts">
const { t } = useI18n();
const title = t("pages.about.title");
useHead({
  title,
});

const oldImagesPath = [
  "/img/about/old1.jpg",
  "/img/about/old2.jpg",
  "/img/about/old3.jpg",
];
const newImagesPath = [
  "/img/about/new1.jpg",
  "/img/about/new2.jpg",
  "/img/about/new3.jpg",
];
</script>

<template>
  <div>
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t('pages.about.title') }}</h1>
      </template>
    </CsArrowSeparator>
    <div class="sections">
      <p>{{ $t('pages.about.before.part_1') }}</p>
      <p>{{ $t('pages.about.before.part_2') }}</p>
      <p class="signature">
        {{ $t('pages.about.before.signature') }}
      </p>
    </div>
    <div class="images">
      <CsImageCarousel :items="oldImagesPath" />
    </div>
    <CsArrowSeparator lenght="medium" />
    <div class="sections">
      <p>{{ $t('pages.about.now.part_1') }}</p>
      <p>{{ $t('pages.about.now.part_2') }}</p>
      <p class="signature">
        {{ $t('pages.about.now.signature') }}
      </p>
    </div>
    <div class="images extra-padding-after">
      <CsImageCarousel :items="newImagesPath" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  padding-block-end: 2rem;
}

.images {
  inline-size: 85%;
  margin: auto;
  padding-block: 1rem;
}

.sections {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-inline-size: 1000px;
  inline-size: 80%;
  margin: auto;
  text-align: justify;
}

.signature {
  font-family: "Dancing", sans-serif;
  font-size: 1.5rem;
}
</style>
