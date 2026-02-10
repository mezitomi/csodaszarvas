<template>
  <NuxtLinkLocale class="branding" to="/">
    <CsDeerLogo
      class="full-branding"
      :is-flipped="true"
    />
    <div class="full-branding">
      <p>{{ $t("navbar.branding.part_1") }}</p>
      <p>{{ $t("navbar.branding.part_2") }}</p>
    </div>
    <CsDeerLogo />
  </NuxtLinkLocale>
</template>

<style lang="scss" scoped>
.branding {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 1.25rem;
  white-space: nowrap;
  font-family: "Yeseva", serif;
  color: white;
  font-weight: 400;
  line-height: 1.5;

  p {
    margin: 0;
  }

  align-items: center;
  --va-font-family: "Yeseva", serif;
  padding-inline: 1rem;
  padding-block: 0.5rem;

  .full-branding {
    display: none;

    @media (min-width: 576px) {
      display: block;
    }
  }
}
</style>
