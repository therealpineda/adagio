import React from 'react';
import { signup } from '../actions/session_actions';
import { connect } from 'react-redux';
import SignUpErrors from './signup_errors';
import { Link } from 'react-router';

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return (
      <div id='login' className='comp'>
        <h6>SignUp</h6>
        <p>[LOGO]</p>
        <p>Create your free Adagio account</p>
        <SignUpErrors errors={this.props.errors} />
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">
            Username:
            <br /><input
              type="text"
              placeholder="e.g. johndoe"
              onChange={ this.update('username') }
              value={this.state.username} />
          </label>
          <br /><label htmlFor="email">
            Email:
            <br /><input
              type="text"
              placeholder="e.g. john@email.com"
              onChange={ this.update('email') }
              value={this.state.email} />
          </label>
          <br /><label htmlFor="email">
            Confirm email:
            <br /><input
              id="email-confirm"
              type="text"
              placeholder="Confirm email"/>
          </label>
          <br /><label htmlFor="first_name">
            First Name:
            <br /><input
              type="text"
              placeholder="e.g. John"
              onChange={ this.update('first_name') }
              value={this.state.first_name} />
          </label>
          <br /><label htmlFor="last_name">
            Last Name:
            <br /><input
              type="text"
              placeholder="e.g. Doe"
              onChange={ this.update('last_name') }
              value={this.state.last_name} />
          </label>
          <br /><label htmlFor="password">
            Password
            <br /><input
              type="text"
              placeholder="Choose a password"
              onChange={ this.update('password') }
              value={this.state.password} />
          </label>
          <br/><button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => { return dispatch(signup(user)); },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
