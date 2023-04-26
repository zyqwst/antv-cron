const { defineConfig } = require('@vue/cli-service')

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin")
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  publicPath: './',
  productionSourceMap:false,
  transpileDependencies: true,
  pages: {
    index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
    }
  },
  configureWebpack:{
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
    externals: ['moment', 'lodash']
  },
  chainWebpack(config) {
    config.resolve.alias.set('@ant-design/icons/lib/dist$', path.resolve('./packages/cron-input/ant-icon.js'))
    if(process.env.analyzer) config.plugin('webpack-report').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    
    config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin())
  }
})
