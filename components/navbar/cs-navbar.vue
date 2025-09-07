<script setup lang="ts">
import { VaDropdown } from "#components";

const authStore = useAuthStore();
const breakpoints = useBreakpoint();
const localePath = useLocalePath();
const { t } = useI18n();

const routes = computed(() => [
  { name: "index", text: t(`navbar.index`), link: localePath("index") },
  { name: "booking", text: t(`navbar.booking`), link: "https://csodaszarvas-ijaszbarlang.salonic.hu/" },
  { name: "about", text: t(`navbar.about`), link: localePath("about") },
  { name: "range", text: t(`navbar.range`), link: localePath("range") },
  { name: "association", text: t(`navbar.association`), link: localePath("association") },
  { name: "contact", text: t(`navbar.contact`), link: localePath("contact") },
]);

const TOGGLE_IS_LOGIN_ENABLED = false;

const isAdmin = computed(() => {
  return authStore.user?.role === "admin";
});

const dropdownRef = ref<InstanceType<typeof VaDropdown> | null>(null);

defineExpose({
  isOpen: computed(() => dropdownRef.value?.valueComputed || false),
});
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

      <VaDropdown
        class="navbar-dropdown"
        placement="bottom-end"
        :offset="[breakpoints.xs ? 10 : 26, 0]"
        :close-on-content-click="true"
        :stick-to-edges="true"
      >
        <template #anchor>
          <VaNavbarItem>
            <Icon
              name="tabler:menu-2"
              size="28px"
              class="dropdown-toggle"
            />
          </VaNavbarItem>
        </template>

        <template #default>
          <VaDropdownContent class="dropdown-content">
            <VaButton
              v-if="isAdmin"
              preset="secondary"
              text-color="#fff"
              :to="localePath('admin-dashboard')"
            >
              {{ $t("navbar.adminDashboard") }}
            </VaButton>
            <VaButton
              v-if="TOGGLE_IS_LOGIN_ENABLED || isAdmin"
              preset="secondary"
              text-color="#fff"
              :to="authStore.user ? localePath('profile') : localePath('login')"
            >
              {{ authStore.user ? authStore.user.name.split(" ")[0] || $t("navbar.my-profile") : $t("navbar.login") }}
              <VaAvatar
                v-if="authStore.user?.image"
                :src="authStore.user.image"
                size="1.5rem"
              />
            </VaButton>
            <VaDivider />
            <VaButton
              v-for="route in routes"
              :key="route.name"
              preset="secondary"
              text-color="#fff"
              :to="route.link"
            >
              {{ route.text }}
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
