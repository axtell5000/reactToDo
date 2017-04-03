/**
 * Created by User on 2017/03/19.
 */
var webpackConfig = require('./webpack.config');

module.exports = function (config) {

  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/js/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ], //the files you are going to use for tests
    preprocessors: { //do things on those files
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']  //sourcemap allows us to see the error inside the actual jsx file and not the huge bundle.js
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });

};
