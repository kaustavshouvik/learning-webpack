const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    log: './src/log.js',
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Output Management' })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // -> To clean output directory automatically, every time build is performed.
  },
};
