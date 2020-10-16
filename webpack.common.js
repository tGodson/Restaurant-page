var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

  module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
      template: './src/template.html'
    })],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
  };