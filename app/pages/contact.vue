<script setup lang="ts">
const openings = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const { t } = useI18n();
const title = t("pages.contact.title");
useHead({
  title,
});
</script>

<template>
  <div>
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t('pages.contact.title') }}</h1>
      </template>
    </CsArrowSeparator>
    <div class="content">
      <div class="sections">
        <div class="informations">
          <h2>{{ $t('pages.contact.infos.title') }}</h2>
          <p>{{ $t('pages.contact.infos.part_1') }}</p>
          <ul>
            <li>
              <Icon name="tabler:phone" />
              <a href="tel:+36703121117" class="link">+36-70-312-1117</a>
            </li>
            <li>
              <Icon name="tabler:map-pin" />
              <a
                href="https://goo.gl/maps/NAAMzi59R6Dzf6Pz8"
                target="_blank"
                class="link"
              >
                {{ $t('pages.contact.infos.part_2') }}
              </a>
            </li>
            <li>
              <Icon name="tabler:mail" />
              <a href="mailto:info@ijaszat.eu" class="link"> info@ijaszat.eu</a>
            </li>
          </ul>
          <p>{{ $t('pages.contact.infos.part_3') }}</p>
        </div>
        <div class="opening-hours">
          <h2>{{ $t('pages.contact.opening_hours.title') }}</h2>
          <ul class="list">
            <li v-for="days in openings" :key="days">
              {{ $t(`pages.contact.opening_hours.${days}`) }}
            </li>
          </ul>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5804433160047!2d19.047004464277855!3d47.47718483908991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddb2f4fe2197%3A0xb982268dd7399e52!2sCsodaszarvas%20-%20%C3%8Dj%C3%A1szbarlang!5e1!3m2!1shu!2shu!4v1781077906298!5m2!1shu!2shu"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding-block-end: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  inline-size: 90%;
  margin: auto;
  padding-block-end: 15vh;
  max-inline-size: 1000px;
}

.sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  text-align: justify;

  // lg and up (>= 1000px)
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;

    .informations {
      inline-size: 40%;
    }
    .opening-hours {
      inline-size: 40%;
    }
  }
}

iframe {
  margin-block-end: 2rem;
  inline-size: 100%;
  block-size: 400px;
  border: none;
}

.link {
  text-decoration: none;
  color: var(--va-on-background-primary);
  margin-inline-start: 0.25rem;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}
</style>
