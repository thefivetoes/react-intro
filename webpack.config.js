/*global require, process, __dirname, module */

var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV;

var defaultPublicPath = 'http://127.0.0.1:3000/static/';

var reduxDevTool = true; // <-------- DISABLE redux-devtools HERE
var webpackDevtools = 'source-map';

var pluginsBase = [
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    },
    __DEVTOOLS__: reduxDevTool
  })
];

var appEntry = [
  './src/index.js'
];

if (env === 'development') {
  pluginsBase.push(new webpack.HotModuleReplacementPlugin());
  appEntry.push('webpack-dev-server/client?http://localhost:3000');
  appEntry.push('webpack/hot/only-dev-server');
}

module.exports = {
  devtool: webpackDevtools,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    alias: {
      'components' : path.join(__dirname, 'src', 'components'),
      'containers' : path.join(__dirname, 'src', 'containers'),
      'historyObj': path.join(__dirname, 'src', 'history'),
      'img' : path.join(__dirname, 'src', 'img'),
      'ramda' : path.join(__dirname, 'node_modules', 'ramda', 'src'),
      'rootActions': path.join(__dirname, 'src', 'actions'),
      'rootSelectors' : path.join(__dirname, 'src', 'selectors'),
      'styles' : path.join(__dirname, 'src', 'styles'),
      'utils' : path.join(__dirname, 'src', 'utils'),
      'constants': path.join(__dirname, 'src', 'constants')
    }
  },
  entry: {
    app: appEntry,
    vendors: [
      'normalizr',
      'react-redux',
      'react-router',
      'redux',
      'redux-history-transitions',
      'redux-thunk',
      'react'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: defaultPublicPath,
    sourceMapFilename: '[file].map'
  },
  plugins: pluginsBase,
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /node_modules\/fetch-mock/,
        loaders: ['babel?optional[]=runtime'],
        include: __dirname
      },
      {
        test: /\.js$/,
        loaders: ['babel?optional[]=runtime'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel-loader?optional[]=runtime&stage=0'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /.\/test\/*-test.js$/,
        loaders: ['babel-loader?stage=0&plugins=babel-plugin-rewire'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file?name=img/[name]-[sha1:hash:hex:10].[ext]' // hash!
      }
    ]
  }
};
