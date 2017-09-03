const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
     'vue': 'vue/dist/vue.min.js'
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}] },
      { test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, use: [{loader: 'url-loader'}] }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
    })
  ]
};
