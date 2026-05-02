<script setup lang="ts">
const { t } = useI18n();
const title = t("pages.summer-camp.title");

useHead({
  title,
});
</script>

<template>
  <div>
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t('pages.summer-camp.title') }}</h1>
      </template>
    </CsArrowSeparator>

    <div class="layout">
      <div class="poster-wrapper">
        <NuxtImg
          class="poster"
          src="/img/summer-camp/poster-2026.webp"
          :alt="$t('pages.summer-camp.title')"
          preset="section"
          :width="1200"
          :height="1600"
          sizes="xs:320px sm:420px md:520px lg:620px"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div class="content">
        <section class="section intro-section">
          <p>{{ $t("pages.summer-camp.intro.part_1") }}</p>
          <p>{{ $t("pages.summer-camp.intro.part_2") }}</p>
        </section>

        <section class="section">
          <h2>{{ $t("pages.summer-camp.program.title") }}</h2>
          <p>{{ $t("pages.summer-camp.program.part_1") }}</p>
          <p>{{ $t("pages.summer-camp.program.part_2") }}</p>
          <p>{{ $t("pages.summer-camp.program.part_3") }}</p>
        </section>

        <section class="section">
          <h2>{{ $t("pages.summer-camp.details.title") }}</h2>
          <ul>
            <li>{{ $t("pages.summer-camp.details.date") }}</li>
            <li>{{ $t("pages.summer-camp.details.location") }}</li>
            <li>{{ $t("pages.summer-camp.details.food") }}</li>
            <li>{{ $t("pages.summer-camp.details.equipment") }}</li>
            <li>{{ $t("pages.summer-camp.details.cost") }}</li>
          </ul>
        </section>

        <section class="section">
          <h2>{{ $t("pages.summer-camp.registration.title") }}</h2>
          <p>{{ $t("pages.summer-camp.registration.text") }}</p>
          <p>
            <strong>{{ $t("pages.summer-camp.registration.email_label") }}</strong>
            <a href="mailto:cselotei.tamas92@gmail.com" class="link">
              {{ $t("pages.summer-camp.registration.email") }}
            </a>
          </p>
          <p>
            <strong>{{ $t("pages.summer-camp.registration.phone_label") }}</strong>
            <a href="tel:+36707788724" class="link">
              {{ $t("pages.summer-camp.registration.phone") }}
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  inline-size: 80%;
  max-inline-size: 1000px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-block-end: 1.5rem;
}

.poster-wrapper {
  display: flex;
  justify-content: center;
}

.poster {
  inline-size: 100%;
  max-inline-size: 520px;
  block-size: auto;
  border-radius: 0.5rem;
}

.content {
  inline-size: 100%;
  text-align: justify;
  padding-block-end: 2rem;
}

.intro-section {
  margin-block: 0;
}

.section {
  margin-block: 1.5rem;

  h2 {
    font-size: clamp(1.55rem, 1.8vw, 1.9rem);
    line-height: 1.15;
    margin-block-end: 0.75rem;
    text-align: left;
  }

  ul {
    padding-inline-start: 1.25rem;
  }

  li {
    margin-block-end: 0.5rem;
  }
}

.link {
  color: var(--va-color-primary);
  text-decoration: none;
  margin-inline-start: 0.25rem;
}

@media (max-width: 576px) {
  .layout {
    inline-size: 90%;
  }

  .poster-wrapper {
    inline-size: 100%;
  }

  .content {
    inline-size: 100%;
  }
}

@media (min-width: 1000px) {
  .layout {
    flex-direction: row;
    align-items: flex-start;
  }

  .poster-wrapper {
    flex: 0 0 46%;
  }

  .content {
    flex: 1;
  }

  .intro-section {
    margin-block: 0;
  }
}
</style>
