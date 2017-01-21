var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],

  externals: {
    jquery: 'jQuery'
  },

  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
};

/*note I think this is a bug with foundation*/
/*if after npm install webpack fails to find foundation directory run*/
/*npm i -D css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0*/
