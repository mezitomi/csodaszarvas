<script setup lang="ts">
import { VaDropdown } from "#components";
import { useAuthStore } from "~~/stores/auth";

const authStore = useAuthStore();
const localePath = useLocalePath();
const { t } = useI18n();

const isMobile = useMediaQuery("(max-width: 575px)");
const dropdownOffset = computed(() => isMobile.value ? 10 : 26);

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
  <nav class="navbar">
    <div class="navbar-left">
      <CsNavbarBranding />
    </div>

    <div class="navbar-right">
      <div class="navbar-item">
        <CsLocaleSelector />
      </div>

      <VaDropdown
        class="navbar-dropdown"
        placement="bottom-end"
        :offset="[dropdownOffset, 0]"
        :close-on-content-click="true"
        :stick-to-edges="true"
      >
        <template #anchor>
          <div class="navbar-item">
            <Icon
              name="tabler:menu-2"
              size="28px"
              class="dropdown-toggle"
            />
          </div>
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
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$navbar-mobile-height: 48px;
$navbar-height: 80px;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: $navbar-mobile-height;
  background-color: #000000c0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  font-family: "Serif Pro", serif;
  padding: 0;
  color: white;

  // Desktop height
  @media (min-width: 576px) {
    height: $navbar-height;
  }
}

.navbar-left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}

.dropdown-toggle {
  padding-inline: 1rem;
}

.navbar-item {
  display: flex;
  align-items: center;
  height: 100%;
}

.dropdown-content {
  --va-background-secondary: #000000c0;
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
