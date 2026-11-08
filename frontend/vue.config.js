const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    // El aviso de tamaño salta por el PDF del CV, que no forma parte del JS
    performance: { hints: false }
  },
  devServer: {
    port: 8080
  }
})
