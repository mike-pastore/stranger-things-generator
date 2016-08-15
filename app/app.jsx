var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Logo = require('Logo');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load custom app.css
require('style!css!sass!appStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Logo}/>
		</Route>
	</Router>,
	document.getElementById('app')
);