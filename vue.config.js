const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(glb|gltf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
  },
};
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('file-loader')
      .tap(options => Object.assign(options, { esModule: false }));
  }
};