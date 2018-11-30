const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src'),
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
    configureWebpack: {
        entry: PATHS.source+'/app.js',
        output: {
          filename: 'app.js'
        }
      }
    }
  }