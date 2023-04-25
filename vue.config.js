const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  pages: {
    index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
    }
  }
})
