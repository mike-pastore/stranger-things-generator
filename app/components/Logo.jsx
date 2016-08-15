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

		if (bottomWidth > topMiddleWidth) {
			alert('Uh-oh! the bottom word is kinda long... But here\'s what it looks like anyways.');
		}

		// get X and Y of topFirst letter
		var topWordPos = $('#topFirst').position();
		// adjust width because of Comic Sans goofiness
		var adjWidth = (topWordPos.left + topWidth);

		var rectHeight = 10;

		function makeLines () {					
			// make top line
			$('#topLine').html(`
				<svg width="${adjWidth}" height="${rectHeight}">
  					<rect x="${topWordPos.left}" y="0" width="${topWidth - 20}" height="${rectHeight}" style="fill:black;stroke-width:3;" />
				</svg>
			`);

			// make left line

			// make right line
			
		}

		makeLines();
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