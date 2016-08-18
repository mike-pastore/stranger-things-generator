var React = require('react');
var ReactFitText = require('ReactFitText')

var LogoMessage = ({topFirst, topMiddle, topLast, bottom}) => {
	// componentWillUpdate: function () {

	// },
	return (
		<div id="logoArea">
			<div id="topLine"></div>
			<div id="topWord">
				<h2 className="text-center" id="topWordLength">
					<span className="bigLetter" id="topFirst">
						{topFirst}
					</span>
					<span className="smallLetter" id="topMiddle">
						{topMiddle}
					</span>
					<span className="bigLetter" id="topLast">
						{topLast}
					</span>
				</h2>
			</div>
			<div id="bottomWord">
				<h2 className="text-center smallLetter"><span id="bottomWordLength">{bottom}</span></h2>
			</div>
			
		</div>
	);
}

module.exports = LogoMessage;

				// <ReactFitText>
				// 	<h2 className="text-center smallLetter"><span id="bottomWordLength">{bottom}</span></h2>
				// </ReactFitText>