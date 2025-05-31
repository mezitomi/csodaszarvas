// https://nuxt.com/docs/api/configuration/nuxt-config

import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@vuestic/nuxt",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },

  vuestic: {
    config: {
      colors: {
        presets: {
          light: {
            primary: "#23181a",
            secondary: "#666E75",
            success: "#3D9209",
            info: "#158DE3",
            danger: "#E42222",
            warning: "#FFD43A",
            backgroundPrimary: "#d2c5b8",
            backgroundSecondary: "#d2c5b8",
            backgroundElement: "#ECF0F1",
            backgroundBorder: "#DEE5F2",
            textPrimary: "#262824",
            textInverted: "#FFFFFF",
            shadow: "rgba(0, 0, 0, 0.12)",
            focus: "#49A8FF",
            transparent: "rgba(0, 0, 0, 0)",
            backgroundLanding: "#f4f9fc",
            backgroundLandingBorder: "rgba(155, 179, 206, 0.8)",
            backgroundSidebar: "#ECF0F1",
          },
          dark: {
            primary: "#d2c5b8",
            secondary: "#818992",
            success: "#66BE33",
            info: "#3EAAF8",
            danger: "#F34030",
            warning: "#FFD952",
            backgroundPrimary: "#23181a",
            backgroundSecondary: "#23181a",
            backgroundElement: "#131A22",
            backgroundBorder: "#3D4C58",
            textPrimary: "#F1F1F1",
            textInverted: "#0B121A",
            shadow: "rgba(0, 0, 0, 0.12)",
            focus: "#49A8FF",
            transparent: "rgba(0, 0, 0, 0)",
            backgroundLanding: "#070d14",
            backgroundLandingBorder: "rgba(43, 49, 56, 0.8)",
            backgroundSidebar: "#131A22",
          },
        },
      },
      breakpoint: {
        enabled: true,
        bodyClass: false,
        thresholds: {
          xs: 0,
          sm: 576,
          md: 768,
          lg: 1000,
          xl: 1200,
        },
      },
    },
  },
});
