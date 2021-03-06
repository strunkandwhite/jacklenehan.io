/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  stats: {
    chunks: false,
    colors: true,
    modules: false,
    children: false,
    assets: true,
  },
  // plugins: [new BundleAnalyzerPlugin()],
})
