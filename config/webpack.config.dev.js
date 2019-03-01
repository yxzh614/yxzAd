const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
    new HtmlWebpackPlugin({
      title: 'yxz_ad'
    }),
    new CleanWebpackPlugin(
      ['dist']
    )
  ]
};