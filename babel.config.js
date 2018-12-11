const config = {
  presets: [
    ['@vue/app'],
    ['@babel/preset-env', { modules: false }]
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', {
      'allowTopLevelThis': true
    }]
  ]
}

module.exports = config
