module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "../scss/_fonts.scss";
                         @import "../scss/_variables.scss";`,
      },
    },
  },
};
