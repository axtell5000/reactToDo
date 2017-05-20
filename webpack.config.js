/**
 * Created by User on 2017/01/24.
 */

var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

//This is going to help us streamline our code when going into production
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          //Using JSON.stringify helps with how this process.env handles strings
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          API_KEY: JSON.stringify(process.env.API_KEY),
          AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
          DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
          STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
          PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
          MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
        }
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
          app: 'app',
          applicationStyles: 'app/styles/app.scss',
          actions: 'app/actions/actions.jsx',
          reducers: 'app/reducers/reducers.jsx',
          configureStore: 'app/store/configureStore.jsx'
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

    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
