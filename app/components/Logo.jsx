var React = require('react');
var LogoForm = require('LogoForm');
var LogoMessage = require('LogoMessage');

var Logo = React.createClass({
	getInitialState: function () {
		return {
			topFirst: 'S',
			topMiddle: 'TRANGE',
			topLast: 'R',
			bottom: 'THINGS'
		}
	},
	handleFormSubmit: function (topFirst, topMiddle, topLast, bottom) {
		// var that = this;

		this.setState({
			topFirst: topFirst,
			topMiddle: topMiddle,
			topLast: topLast,
			bottom: bottom
		});

		// this.setState({
		// 	isLoading: true,
		// 	errorMessage: undefined,
		// 	location: undefined,
		// 	temp: undefined
		// });

		// openWeatherMap.getTemp(location).then(function (temp) {
		// 	that.setState({
		// 		location: location,
		// 		temp: temp,
		// 		isLoading: false
		// 	});
		// }, function (err) {
		// 	that.setState({
		// 		isLoading: false,
		// 		errorMessage: err.message
		// 	});
		// });
	},
	// gets called once DOM loads with Logo.jsx
	// componentDidMount: function () {
	// 	// pull location out of URL query (the second "location" is the name of the query key)
	// 	var top = this.props.top.query.top;
	// 	var bottom = this.props.bottom.query.bottom;

	// 	// check to see query param "location" has a value and is a string
	// 	if (top && bottom && top.length > 0 && bottom.length > 0) {
	// 		this.handleFormSubmit(top, bottom);
	// 		window.top.hash = '#/';
	// 		window.bottom.hash = '#/';
	// 	}
	// },
	// // listen for changes in the URL, to change parent component state (Logo.jsx) and update props of children (WeatherMessage.jsx)
	// componentWillReceiveProps: function (newProps) {
	// 	// pull location out of URL query (the second "location" is the name of the query key)
	// 	var top = newProps.top.query.top;
	// 	var bottom = newProps.bottom.query.bottom;

	// 	// check to see query param "location" has a value and is a string
	// 	if (top && bottom && top.length > 0 && bottom.length > 0) {
	// 		this.handleFormSubmit(top, bottom);
	// 		window.top.hash = '#/';
	// 		window.bottom.hash = '#/';
	// 	}
	// },
	render: function () {
		// pull states off Weather module
		var {topFirst, topMiddle, topLast, bottom} = this.state;

		function renderMessage () {
			// if (isLoading) {
			// 	return <h3 className="text-center">Fetching weather...</h3>
			// } else if (temp && location) {
				return <LogoMessage topFirst={topFirst} topMiddle={topMiddle} topLast={topLast} bottom={bottom}/>
			// }
		}

		// function renderError () {
		// 	if (typeof errorMessage === "string") {
		// 		return (
		// 			<ErrorModal message={errorMessage}/>
		// 		)
		// 	}
		// }

		return (
			<div>
				{renderMessage()}
				<LogoForm onLogoSubmit={this.handleFormSubmit}/>
			</div>
		);
	}
});

module.exports = Logo;