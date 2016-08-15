var React = require('react');

var Main = (props) => {
	return (
		<div>
			<div>
				<div className="columns medium-10 large-6 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;