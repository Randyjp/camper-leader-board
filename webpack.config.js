const webpack = require('webpack');
const path = require('path');

module.exports = {
  //where to start the app
  context: path.resolve(__dirname, './app'),
  entry: {
    app: path.join(__dirname, 'app/app.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js'
  },
  //setting up the babel loader to handle jsx files(es2015)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {presets: ['react','es2015']}
        }],
      },
    ],
  },//end of modules
  resolve: {
    //Tell webpack what directories should be searched when resolving modules.
    modules: [
      path.join(__dirname, 'app/components'),
      'node_modules',
    ],
    //Automatically resolve certain extensions.
    extensions: ['.js', '.jsx', '.json'],
  }, //end of resolve
};//end of module.exports
