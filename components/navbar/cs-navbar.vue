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
      <CsNavbarLocaleSelector />
      <VaNavbarItem v-if="!authStore.user">
        <VaButton preset="plain">
          <NuxtLinkLocale to="login">
            {{ $t("navbar.login") }}
          </NuxtLinkLocale>
        </VaButton>
      </VaNavbarItem>
      <VaNavbarItem v-else>
        <VaButton preset="plain">
          <NuxtLinkLocale to="profile">
            <VaAvatar
              v-if="authStore.user?.image"
              :src="authStore.user.image"
              size="1.5rem"
            />
            {{ authStore.user?.name.split(" ")[0] || $t("navbar.my-profile") }}
          </NuxtLinkLocale>
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

  .va-button {
    text-transform: uppercase;
    --va-button-font-weight: 400;
    --va-button-font-size: 1.125rem;
  }
}
</style>
