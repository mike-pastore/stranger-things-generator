var React = require('react');
var LogoForm = require('LogoForm');
var LogoMessage = require('LogoMessage');

var Logo = React.createClass({
	getInitialState: function () {
		return {
			topFirst: 'S',
			topMiddle: 'TRANGE',
			topLast: 'R',
			bottom: 'THINGS',
			topMiddleWidth: 265
		}
	},
	handleFormSubmit: function (topFirst, topMiddle, topLast, bottom) {
		this.setState({
			topFirst: topFirst,
			topMiddle: topMiddle,
			topLast: topLast,
			bottom: bottom
		});
	},
	componentDidUpdate: function () {
		var topWidth = $('#topFirst').width() + $('#topMiddle').width() + $('#topLast').width();
		var topMiddleWidth = $('#topMiddle').width();
		var bottomWidth = $('#bottomWordLength').width();

		alert(
			'topWidth = ' + topWidth +
			'\ntopMiddleWidth = ' + topMiddleWidth +
			'\nbottomWidth = ' + bottomWidth
		);

		if (bottomWidth > topMiddleWidth) {
			alert('uh-oh! the bottom\'s longer than the top');
		}
	},
	render: function () {
		// pull states off Logo module
		var {topFirst, topMiddle, topLast, bottom} = this.state;

		function renderMessage () {
			return <LogoMessage topFirst={topFirst} topMiddle={topMiddle} topLast={topLast} bottom={bottom}/>
		}

		return (
			<div>
				{renderMessage()}
				<LogoForm onLogoSubmit={this.handleFormSubmit}/>
			</div>
		);
	}
});

module.exports = Logo;