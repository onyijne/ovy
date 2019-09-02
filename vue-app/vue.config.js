const path = require('path')

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, '../web/auto')
}
module.exports = {
  publicPath: '/auto/',
  outputDir: PATHS.build,
  assetsDir: '',
  filenameHashing: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  css: {
    extract: false
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'dev.test.com',
        ws: true,
        changeOrigin: true
      },
      '^/ext': {
        target: '<other_url>'
      }
    }
  },
  configureWebpack: {
    output: {
      filename: 'app.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'vueonsen$': 'vue-onsenui/esm/index.js'
      }
    }
  }
}
