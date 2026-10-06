'use strict';


const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const OUTPUT_DIRNAME = path.resolve(projectRoot, 'build');
const SRC_DIRNAME = path.resolve(projectRoot, 'src');


module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: path.resolve(SRC_DIRNAME, 'js/main.js'),

  output: {
    clean: true,
    filename: 'js/[name].js',
    path: OUTPUT_DIRNAME,
    publicPath: '/',
    sourceMapFilename: '[file].map'
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: SRC_DIRNAME,
          globOptions: {
            ignore: ['**/js/**']
          }
        }
      ]
    })
  ]
};
