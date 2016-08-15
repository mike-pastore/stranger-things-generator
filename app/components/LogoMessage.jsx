var React = require('react');

var LogoMessage = ({topFirst, topMiddle, topLast, bottom}) => {
	return (
		<div id="logoArea">
			<h2 className="text-center">
				<span className="bigLetter">
					{topFirst}
				</span>
				<span className="smallLetter">
					{topMiddle}
				</span>
				<span className="bigLetter">
					{topLast}
				</span>
			</h2>
			<h2 className="text-center">{bottom}</h2>
		</div>
	);
}

module.exports = LogoMessage;