// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@vuestic/nuxt", "@nuxt/icon"],
  eslint: {
    config: {
      standalone: false,
    },
  },

  vuestic: {
    config: {
      colors: {
        variables: {
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
      },
    },
  },
});
