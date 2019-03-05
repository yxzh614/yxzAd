const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entry = {}
const htmlPlugins = [];

glob.sync('src/pages/**/index.js').forEach(item => {
    const name = item.slice(10, -9)
    const html = new HtmlWebpackPlugin({
      title: 'YXZAD投放平台',
      filename: name + '/index.html',
      chunks: [name]
    })
    htmlPlugins.push(html)
    entry[name] = './src/pages/' + name + '/index.js'
})

module.exports = {
    htmlPlugins,
    entry
}