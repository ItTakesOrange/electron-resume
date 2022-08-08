const path = require('path')
const baseConfig = require('./webpack.base')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/renderer/app.tsx'),
  },
  // target: 'electron-renderer',
  output: {
    filename: '[name].[contenthash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 7001,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/renderer/index.html'),
      chunks: ['index'],
    }),
  ],
}

module.exports = webpackMerge.merge(baseConfig, config)
