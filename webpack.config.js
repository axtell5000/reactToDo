/**
 * Created by User on 2017/01/24.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry : [
      //to allow jquery and foundtion to be recognized by webpack, we must add 'script!' in front. The nmp module script-loader allows us to do this.
      //these must also be in in the karma.config if there is jquery in things we want tested
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery' : 'jquery'
      })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },

    resolve: {
        root: __dirname,
        modulesDirectories: [
          'node_modules',
          './app/components',
          './app/api'
        ],
        alias: {
          applicationStyles: 'app/styles/app.scss',
          actions: 'app/actions/actions.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015' , 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
          }
        ]
    },
    //this way we can change to the settings of foundation and not override
    sassLoader: {
      includePaths: [
        path.resolve(__dirname, './node_modules/foundation-sites/scs/util')
      ]
    },

    devtool: 'cheap-module-eval-source-map'
};
