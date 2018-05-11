const {
  Nuxt,
  Builder
} = require("nuxt")

const nuxt = new Nuxt(require("./nuxt.config"));

module.exports = app => {
  if (app.config.nuxtDev) {
    const builder = new Builder(nuxt);
    builder.build().catch(e => {
      console.error(e);
      process.exit(1);
    });
  }
  app.beforeStart(() => {
    app.nuxt = nuxt;
  });
};
