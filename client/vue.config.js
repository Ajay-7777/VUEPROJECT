const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy:'http://localhost:3080/'
  },
  transpileDependencies: true,
  lintOnSave:false,
})
