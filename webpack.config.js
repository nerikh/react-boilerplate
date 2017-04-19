var webpack = require('webpack');

module.exports = {
  // by default webpack does not know what to do with jsx files
  // use babel-loader to convert all our jsx files into es5 code (see module / loaders below)
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
    // exclude need to specify directory paths when using 'require' imports
    // __dirname is a variable available in nodejs by default, gives us path to whatever file we're in,
    // so since this webpack.config.js file is inside the root directory, this is where __dirname is set to start
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    // indicate files to look for
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
      // tell bable-loader to take our files, parse them through react, get the ouput, and then run them through es2015
        // load babel-loader
        loader: 'babel-loader',
        // pass data into babel-loader telling it what we want it to do to our files
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        // tell it which files to get via regular expression
        test: /\.jsx?$/,
        // specify which folders not to parse
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
