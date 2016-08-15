var React = require('react');

var LogoMessage = ({topFirst, topMiddle, topLast, bottom}) => {
	return (
		<div id="logoArea">
			<div id="topWord">
				<h2 className="text-center">
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