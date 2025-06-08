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
      <img src="/img/association/csodacsapat2.jpg" alt="" width="100%" draggable="false">
    </div>
    <CsArrowSeparator lenght="medium" />
    <div class="section reverse">
      <div class="texts">
        <p>{{ $t('pages.association.section_2.part_1') }}</p>
        <p>{{ $t('pages.association.section_2.part_2') }}</p>
      </div>
      <img src="/img/association/csodacsapat.jpg" alt="" width="100%" draggable="false">
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  max-inline-size: 1000px;
  inline-size: 85%;
  margin: auto;
  text-align: justify;
  padding-block-end: 2rem;

  .va-screen-xs &,
  .va-screen-sm & {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .texts {
      inline-size: 100%;
    }

    img {
      inline-size: 100%;
    }
  }

  .texts {
    inline-size: 50%;
  }

  img {
    inline-size: 45%;
  }

  &.reverse:not(.va-screen-xs &, .va-screen-sm &) {
    flex-direction: row-reverse;
  }
}
</style>
