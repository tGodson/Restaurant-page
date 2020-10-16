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
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'imgs'
            }
          }
        },
      ],
    },
  };