const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const nodeExternals = require('webpack-node-externals')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
  target: 'node',
  devServer: {
    contentBase: PATHS.build,
    port: 7700
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        // exclude: '/node_modules/',
        use: {
          loader: 'vue-loader',
          options: { extractCSS: true, optimizeSSR: false }
        }
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', 'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
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
      'vue$': 'vue/dist/vue.esm.js',
      'vueonsen$': 'vue-onsenui/esm/index.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = configs
