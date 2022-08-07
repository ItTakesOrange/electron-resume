const path = require('path')
const baseConfig = require('./webpack.base')
const webpackMerge = require('webpack-merge')

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
  },
  devtool: 'inline-source-map',
}

module.exports = webpackMerge.merge(baseConfig, config)
