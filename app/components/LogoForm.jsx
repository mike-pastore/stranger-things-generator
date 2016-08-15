var React = require('react');

var LogoForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		// put cursor back on top input (for rapid user entry)
		$('#top').focus();

		// get info from form fields
		var top = this.refs.top.value;
		var bottom = this.refs.bottom.value;

		// trim any spaces, make all caps
		top = top.trim().toUpperCase();
		bottom = bottom.trim().toUpperCase();

		// NOTE: top should be > 3 since the first and last letters are made bigger. You need stuff in the middle
		if (top.length > 3 && bottom.length > 0) {
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
			<form onSubmit={this.onFormSubmit} className="medium-10 large-6 small-centered">
				<div>
					<label>Top Word
						<input type='text' ref='top' id='top' placeholder='Stranger' />
					</label>
					<label>Bottom Word
						<input type='text' ref='bottom' placeholder='Things' />
					</label>
				</div>
				<div>
					<button className="hollow button expanded secondary">Do The Thing</button>
				</div>
			</form>
		);
	}
});

module.exports = LogoForm;