<template>
  <VaNavbar color="#00000057">
    <template #left>
      <CsNavbarBranding />
    </template>
    <template #right>
      <CsThemeToggle />
    </template>
  </VaNavbar>
</template>

<style lang="scss" scoped>
$navbar-mobile-width: 200px;
$navbar-mobile-height: 48px;
$navbar-height: 80px;

.va-navbar {
  --va-font-family: "Serif Pro", serif;
  --va-navbar-height: var($navbar-height);
  --va-navbar-padding-x: 0;
  --va-navbar-padding-y: 0;
  //   .navigation {
  //     display: flex;
  //     align-items: center;
  //     flex: 1;
  //     justify-content: flex-end;
  //     margin-block-start: 0;
  //   }

  //   .dropdown-nav {
  //     display: flex;
  //     flex-direction: column;
  //     position: fixed;
  //     inline-size: 100%;
  //     max-inline-size: $navbar-mobile-width;
  //     inset-inline-end: 0;
  //     background-color: $color-navbar;

  //     inset-block-start: $navbar-mobile-height;

  //     @include sm {
  //       inset-block-start: $navbar-height;
  //     }
  //   }

  //   .mobile-nav-enter-active,
  //   .mobile-nav-leave-active {
  //     transition: 0.5s ease all;
  //   }

  //   .mobile-nav-enter-from,
  //   .mobile-nav-leave-to {
  //     transform: translateX($navbar-mobile-width);
  //   }

  //   .mobile-nav-enter-to,
  //   .mobile-nav-leave-from {
  //     transform: translateX(0);
  //   }
}
</style>
