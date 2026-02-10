<template>
  <div class="cover" />
</template>

<style lang="scss" scoped>
.cover {
  block-size: 100px;
  inline-size: 100%;
  object-fit: cover;
  background: url("/img/cover_image.webp");
  background-size: cover;
  background-position: center;

  @media (min-width: 576px) {
    block-size: 120px;
  }
}
</style>
