const path = require('path')
const webpack = require('webpack')

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'web')
}

module.exports = {
  devServer: {
    contentBase: PATHS.build,
    hot: true
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
