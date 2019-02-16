const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}

module.exports = {
  lintOnSave: false,
  configureWebpack: config // will be merged into webpack, see: https://cli.vuejs.org/guide/webpack.html
}
