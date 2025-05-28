<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@font-face {
  font-family: "Dancing"; /* fpr signature */
  src:
    url("/fonts/Dancing-Bold.ttf") format("ttf"),
    url("/fonts/Dancing-Bold.woff") format("woff");
}

@font-face {
  font-family: "Serif-pro";
  src:
    url("/fonts/SourceSerifPro-Regular.ttf") format("ttf"),
    url("/fonts/SourceSerifPro-Regular.woff") format("woff");
}

@font-face {
  font-family: "Yeseva";
  src:
    url("/fonts/YesevaOne-Regular.ttf") format("ttf"),
    url("/fonts/YesevaOne-Regular.woff") format("woff");
}

body {
  margin: 0;
  padding: 0;
  inset: 0;
  --va-font-family: "Serif-pro";
  font-family: "Serif-pro";

  h1,
  h2,
  h3,
  h4 {
    font-family: "Yeseva";
    --va-font-family: "Yeseva";
    margin-block-start: 0;
    margin-block-end: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }
}
</style>
