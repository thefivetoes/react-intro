var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var exec = require('child_process').execSync;

var env = process.env.NODE_ENV;

var hot = (env === 'development') ? true : false;

new WebpackDevServer(webpack(config), {
  contentBase: 'src/',
  publicPath: config.output.publicPath,
  hot: hot,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
