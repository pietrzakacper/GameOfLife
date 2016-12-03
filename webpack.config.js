const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	entry: './js/es6/main.js',
	output: { path: __dirname, filename: './js/main.min.js' },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query:
				{
					presets: [ 'es2015', 'react' ]
				}
			} ],
	devtool: 'source-map',
	plugins: [
         new webpack.optimize.UglifyJsPlugin({
             compress: {
                 screw_ie8: true,
                 warnings: false
             }
         })
     ]
	}
};
