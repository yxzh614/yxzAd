const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
    login: './src/pages/login/index.js'
  },
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
    new HtmlWebpackPlugin({
      title: 'yxz_ad'
    }),
    new HtmlWebpackPlugin({
      title: '登录',
      filename: 'login/index.html'
    }),
    new CleanWebpackPlugin(
      ['dist']
    )
  ]
};