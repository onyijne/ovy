const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'web/assets')
}

const configs = {
  entry: PATHS.source + '/app.js',
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
      // 'vueonsen$': 'vue-onsenui/esm/index.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = configs
