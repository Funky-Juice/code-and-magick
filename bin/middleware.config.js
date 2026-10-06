'use strict';

let webpackConfig = require('./webpack.config.js');

module.exports = {
  publicPath: webpackConfig.output.publicPath,
  writeToDisk: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    modules: false
  }
};
