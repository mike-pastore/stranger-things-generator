var React = require('react');

var LogoForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		// get info from form fields
		var top = this.refs.top.value;
		var bottom = this.refs.bottom.value;

		// trim any spaces, make all caps
		top = top.trim().toUpperCase();
		bottom = bottom.trim().toUpperCase();

		if (top.length > 0 && bottom.length > 0) {
			this.refs.top.value = '';
			this.refs.bottom.value = '';

			// separate out top word into three distinct elements
			var topFirst = top[0];
			var topLast = top[top.length - 1];
			var topMiddle = top.substring(1, top.length - 1);

			// send info to props
			this.props.onLogoSubmit(topFirst, topMiddle, topLast, bottom);
		}
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<label>Top Word
						<input type='text' ref='top' placeholder='Stranger' />
					</label>
					<label>Bottom Word
						<input type='text' ref='bottom' placeholder='Things' />
					</label>
				</div>
				<div>
					<button className="hollow button expanded">Get Weird</button>
				</div>
			</form>
		);
	}
});

module.exports = LogoForm;