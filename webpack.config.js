var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'script!./app/js/textfill/source/jquery.textfill.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			appStyles: 'app/styles/app.scss',
			About: 'app/components/About.jsx',
			Logo: 'app/components/Logo.jsx',
			LogoForm: 'app/components/LogoForm.jsx',
			LogoMessage: 'app/components/LogoMessage.jsx'
		},
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				// match any .jsx extension for this babel loader
				test: /\.jsx?$/,
				// but don't parse in these folders
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};