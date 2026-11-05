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
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t("brand_name") }}</h1>
      </template>
    </CsArrowSeparator>
    <div class="intro-container">
      <div class="intro-text">
        <p class="intro-paragraph" v-text="$t('pages.index.new-hope.line1')" />
        <p v-text="$t('pages.index.new-hope.line2')" />
        <p v-text="$t('pages.index.new-hope.line3')" />
        <p v-text="$t('pages.index.new-hope.line4')" />
        <p v-text="$t('pages.index.new-hope.line5')" />
        <p v-text="$t('pages.index.new-hope.line6')" />
        <p>
          <a href="mailto:csodaszarvasse@gmail.com">csodaszarvasse@gmail.com</a>
        </p>
        <p v-text="$t('pages.index.new-hope.line8')" />
      </div>
    </div>
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
