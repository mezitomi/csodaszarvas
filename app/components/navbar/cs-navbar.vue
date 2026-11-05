<template>
  <nav class="navbar">
    <div class="navbar-left">
      <CsNavbarBranding />
    </div>

    <div class="navbar-right">
      <div class="navbar-item">
        <CsLocaleSelector />
      </div>
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
  padding-inline: 1rem;
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
