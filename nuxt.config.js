const webpack = require('webpack')

module.exports = {
  srcDir: 'nuxt/',
  head: {
    titleTemplate: '%s - Title',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      }
    ]
  },
  css: [],
  build: {
    vendor: ['axios', 'lodash'],
  },
  plugins: ['~/plugins/lodash.js']
}
