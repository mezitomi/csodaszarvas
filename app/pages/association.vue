<script setup lang="ts">
const { t } = useI18n();
const title = t("pages.association.title");
useHead({
  title,
});
</script>

<template>
  <div>
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t('pages.association.title') }}</h1>
      </template>
    </CsArrowSeparator>

    <div class="section">
      <div class="texts">
        <p>{{ $t('pages.association.section_1.part_1') }}</p>
        <p>{{ $t('pages.association.section_1.part_2') }}</p>
      </div>
      <NuxtImg
        src="/img/association/csodacsapat2.webp"
        alt=""
        preset="section"
        :width="960"
        :height="640"
        sizes="xs:375px sm:576px md:400px lg:450px"
        loading="eager"
        fetchpriority="high"
        draggable="false"
      />
    </div>
    <CsArrowSeparator lenght="medium" />
    <div class="section reverse">
      <div class="texts">
        <p>{{ $t('pages.association.section_2.part_1') }}</p>
        <p>{{ $t('pages.association.section_2.part_2') }}</p>
      </div>
      <NuxtImg
        src="/img/association/csodacsapat.webp"
        alt=""
        preset="section"
        :width="2048"
        :height="1365"
        sizes="xs:375px sm:576px md:400px lg:450px"
        loading="lazy"
        draggable="false"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-inline-size: 1000px;
  inline-size: 85%;
  margin: auto;
  text-align: justify;
  padding-block-end: 2rem;

  .texts {
    inline-size: 100%;
  }

  img,
  .nuxt-img {
    inline-size: 100%;
    block-size: auto;
  }

  // md and up (>= 768px)
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;

    .texts {
      inline-size: 50%;
    }

    img,
    .nuxt-img {
      inline-size: 45%;
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }
}
</style>
