<template>
  <div class="container">
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>{{ $t("brand_name") }}</h1>
      </template>
    </CsArrowSeparator>
    <div class="intro-container">
      <img class="intro-image" src="/img/single_arrow.jpg" alt="">
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

  .intro-image,
  .intro-text {
    max-width: 95%;
  }

  .va-screen-xl &,
  .va-screen-lg & {
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
