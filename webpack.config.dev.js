const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 5000,
	}
});
