var React = require('react');

var Main = (props) => {
	return (
		<div>
			<div>
				<div className="columns small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;