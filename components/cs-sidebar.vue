<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <VaSidebar color="#00000057" class="sidebar">
    <VaSidebarItem>
      <VaButton
        text-color="#fff"
        preset="secondary"
        :to="localePath('admin-dashboard')"
      >
        {{ $t("pages.admin.sidebar.dashboard") }}
      </VaButton>
    </VaSidebarItem>
    <VaSidebarItem>
      <VaButton
        text-color="#fff"
        preset="secondary"
        :to="localePath('admin-dashboard-notifications')"
      >
        {{ $t("pages.admin.sidebar.notifications") }}
      </VaButton>
    </VaSidebarItem>
  </VaSidebar>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex: 1;

  --va-font-family: "Serif Pro", serif;
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
