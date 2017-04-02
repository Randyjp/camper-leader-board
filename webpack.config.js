const webpack = require('webpack');
const path = require('path');

module.exports = {
  //where to start the app
  context: path.resolve(__dirname, './app'),
  entry: {
    app: [
      'script-loader!jquery/dist/jquery.js',
      'script-loader!foundation-sites/dist/js/foundation.js',
      path.join(__dirname, 'app/app.jsx'),
    ]
  },
  externals: {
    jquery: 'jQuery'
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
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: [
                path.resolve(__dirname, './app/styles'),
                path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
              ]
            }
          }
        ],
      },
    ],
  },//end of modules
  resolve: {
    //Tell webpack what directories should be searched when resolving modules.
    modules: [
      path.join(__dirname, 'app/components'),
      path.join(__dirname, 'app/api'),
      'node_modules',
    ],
    //Automatically resolve certain extensions.
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      applicationStyles: path.join(__dirname, 'app/styles/app.scss'),
    }
  }, //end of resolve
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};//end of module.exports
