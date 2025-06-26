<template>
  <VaSidebar
    color="#00000057"
    class="sidebar"
    hoverable
  >
    <VaSidebarItem>
      <VaSidebarItemContent>
        <Icon class="icon" name="tabler:layout-sidebar" />
        <VaSidebarItemTitle>
          <NuxtLinkLocale to="admin-dashboard">
            {{ $t("pages.admin.sidebar.dashboard") }}
          </NuxtLinkLocale>
        </VaSidebarItemTitle>
      </VaSidebarItemContent>
    </VaSidebarItem>
    <VaSidebarItem>
      <VaSidebarItemContent>
        <Icon class="icon" name="tabler:bell-ringing" />
        <VaSidebarItemTitle>
          <NuxtLinkLocale to="admin-dashboard-notifications">
            {{ $t("pages.admin.sidebar.notifications") }}
          </NuxtLinkLocale>
        </VaSidebarItemTitle>
      </VaSidebarItemContent>
    </VaSidebarItem>
    <VaSidebarItem>
      <VaSidebarItemContent>
        <Icon class="icon" name="tabler:news" />
        <VaSidebarItemTitle>
          <NuxtLinkLocale to="admin-dashboard-news">
            {{ $t("pages.admin.sidebar.news") }}
          </NuxtLinkLocale>
        </VaSidebarItemTitle>
      </VaSidebarItemContent>
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

  a {
    text-transform: uppercase;
    --va-button-font-weight: 400;
    --va-button-font-size: 1.125rem;
    inline-size: 100%;
    text-decoration: none;
    margin: auto;
    color: #fff;
    font-size: var(--va-button-font-size);
  }
}
</style>
