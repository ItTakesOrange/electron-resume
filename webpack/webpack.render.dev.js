const path = require('path')
const baseConfig = require('./webpack.base')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/renderer/app.jsx'),
  },
  // target: 'electron-renderer',
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 7001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/renderer/index.html'),
      chunks: ['index'],
    }),
  ],
}

module.exports = webpackMerge.merge(baseConfig, config)
