const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');

const server = new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer);
server.listen(8080, 'localhost');
