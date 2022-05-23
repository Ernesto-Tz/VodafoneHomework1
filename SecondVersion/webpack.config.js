const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/javascript/script.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devServer: { //For the development server
    static: {
      directory: path.join(__dirname), // Here we define where is the index.html
    },
    port: 9000, // which port we want to use
  },
};