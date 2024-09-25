const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    log: './src/log.js',
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Development' })],
  devtool: 'inline-source-map',
  devServer: {
    static: '/dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // -> To clean output directory automatically, every time build is performed.
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
