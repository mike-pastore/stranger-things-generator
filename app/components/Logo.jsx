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
			
			// $('#bottomWord h2').textfill();
			var bottomWordNewPos = $('#bottomWord').offset();
			$('#bottomWord').offset({top: bottomWordNewPos.top + 17, left: bottomWordNewPos.left});
		} else {
			// get X and Y of topFirst letter
			var topWordPos = $('#topFirst').position();
			// adjust width of topLine because of Comic Sans goofiness
			var adjWidth = (topWordPos.left + topWidth);

			var rectHeight = 7;
			
			// resize bottomWord div, and resize text to fill that div (THIS SHOULD GO IN LOGOMESSAGE.jsx ultimately?)
			var bottomWordPos = $('#topMiddle').offset();
			$('#bottomWord').width(topMiddleWidth);
			var topMiddleHeight = $('#topMiddle').height();
			$('#bottomWord').offset({top:bottomWordPos.top + (topMiddleHeight - 25), left:bottomWordPos.left});
		}
		
		

		// AH finally found the best library @ http://jquery-textfill.github.io/
		

	
		function makeLines () {					
			// make top line
			// PUT INTO NICE FOUNDATION DIV SO IT SCALES WITH PAGE RE-SIZE (AND STAYS IN LINE WITH TOP WORD)
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