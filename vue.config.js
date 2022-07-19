module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en-EN",
      fallbackLocale: "en-EN",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/scss/mixins.scss";`,
      },
    },
  },
};
