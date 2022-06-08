const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    // Since entry is an object we can use multiple entry points.
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' //Entry is an object it can use the name given to that file in this case "bundle"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'New App',//we can call this title dinamically point 4.
      filename: 'index.html',//filename of the output
      template: 'src/main.html'//entry point, template to start from
    }),
  ]
};