import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component {
	submit = data =>
		this.props
			.login(data)
			.then(() => this.props.history.push("/dashboard"));

	render() {
		return (
			<div className="ui container">
				<h1>LoginPage</h1>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
