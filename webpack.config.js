const path = require('path');
require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'mucraftsclient.jsx'),
  mode: 'production',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    },        {
        test: /\.(gif|png|PNG|JPE?G|jpe?g|svg)$/,  
        use: [{
            loader: 'url-loader?limit=1000000' 
        }]
    }]
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx','.jpg']
  }
};