const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'client'),
    build: path.join(__dirname, 'web')
};

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    :'/',
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      }
    },
    outputDir: PATHS.build,
    filenameHashing: false,
    productionSourceMap: false,
    pluginOptions: {
      sourceDir: PATHS.source
    },
    configureWebpack: {
      entry: {
        app: [
          PATHS.source+'/app.js'
        ]
      }
    }
  }