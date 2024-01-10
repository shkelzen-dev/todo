const path = require('path');

module.exports = {
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{ 
    static: path.join(__dirname, 'dist'),
    port: 9000
  }
};