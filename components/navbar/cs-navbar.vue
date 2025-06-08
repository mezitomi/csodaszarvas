<script setup lang="ts">
const authStore = useAuthStore();
const breakpoints = useBreakpoint();
const localePath = useLocalePath();

const routes = [
  "index",
  "about",
  "range",
  "association",
  "contact",
];
</script>

<template>
  <VaNavbar fixed color="#00000057">
    <template #left>
      <CsNavbarBranding />
    </template>

    <template #right>
      <VaNavbarItem>
        <CsLocaleSelector />
      </VaNavbarItem>

      <VaDropdown class="navbar-dropdown" placement="bottom-end" :offset="[breakpoints.xs ? 10 : 26, 0]" :close-on-content-click="false" :stick-to-edges="true">
        <template #anchor>
          <VaNavbarItem>
            <Icon name="tabler:menu-2" size="28px" class="dropdown-toggle" />
          </VaNavbarItem>
        </template>

        <template #default>
          <VaDropdownContent class="dropdown-content">
            <VaButton preset="secondary" text-color="#fff" :to="authStore.user ? localePath('profile') : localePath('login')">
              {{ authStore.user ? authStore.user.name.split(" ")[0] || $t("navbar.my-profile") : $t("navbar.login") }}
              <VaAvatar
                v-if="authStore.user?.image"
                :src="authStore.user.image"
                size="1.5rem"
              />
            </VaButton>
            <VaDivider />
            <VaButton v-for="route in routes" :key="route" preset="secondary" text-color="#fff" :to="localePath(route)">
              {{ $t(`navbar.${route}`) }}
            </VaButton>

            <VaDivider />
            <CsThemeToggle />
          </VaDropdownContent>
        </template>
      </VaDropdown>
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
}
.dropdown-toggle {
  padding-inline: 1rem;
}

.dropdown-content {
  --va-background-secondary: #00000057;
  min-inline-size: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  a.va-button {
    text-transform: uppercase;
    --va-button-font-weight: 400;
    --va-button-font-size: 1.125rem;
    inline-size: 100%;
    text-decoration: none;
    margin: auto;
  }
}
</style>
