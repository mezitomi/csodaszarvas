<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <VaNavbar color="#00000057">
    <template #left>
      <CsNavbarBranding />
    </template>
    <template #right>
      <VaNavbarItem v-if="!authStore.user">
        <VaButton>
          <NuxtLink to="/login">
            Bejelentkezés
          </NuxtLink>
        </VaButton>
      </VaNavbarItem>
      <VaNavbarItem v-else>
        <VaButton>
          <NuxtLink to="/profile">
            <VaAvatar
              v-if="authStore.user?.image"
              :src="authStore.user.image"
              size="1.5rem"
            />
            {{ authStore.user?.name.split(" ")[0] || "Profilom" }}
          </NuxtLink>
        </VaButton>
      </VaNavbarItem>
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

  a {
    text-decoration: none;
    color: var(--va-color-primary);
  }
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
