const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 8050
  },
  plugins: [new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: './index.html'
  })],
  module: {
    rules: [{
     test: /\.scss$/,
     use: [
      "style-loader", // creates style nodes from JS strings
      "css-loader", // translates CSS into CommonJS
      "sass-loader" // compiles Sass to CSS, using Node Sass by default
     ]
    }]
  }
};
