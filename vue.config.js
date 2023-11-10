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
 publicPath: process.env.NODE_ENV === 'production' ? '/F-F/' : '/',
}