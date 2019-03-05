const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { htmlPlugins, entry } = require('./util');
console.log(htmlPlugins, entry)

module.exports = {
  entry,
  output: {
    filename: '[name]/bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  resolve: {
      extensions: ['.js', '.css', '.less', '.ejs']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    ...htmlPlugins,
    new CleanWebpackPlugin(
        'dist', {
        root: path.resolve(__dirname, '../'),
      }
    )
  ]
};