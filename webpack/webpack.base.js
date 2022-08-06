const path = require('path')

module.exports = {
  output: {
    clean: true,
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '..', 'src/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
