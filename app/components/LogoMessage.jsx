var React = require('react');

var LogoMessage = ({topFirst, topMiddle, topLast, bottom}) => {
	return (
		<div id="logoArea">
			<div id="topWord">
				<h2 className="text-center">
					<span className="bigLetter">
						{topFirst}
					</span>
					<span className="smallLetter" id="topMiddle">
						{topMiddle}
					</span>
					<span className="bigLetter">
						{topLast}
					</span>
				</h2>
			</div>
			<div id="bottomWord" className="smallLetter">
				<h2 className="text-center smallLetter">{bottom}</h2>
			</div>
			
		</div>
	);
}

module.exports = LogoMessage;