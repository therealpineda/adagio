import React from 'react';
import { signup } from '../actions/session_actions';
import { connect } from 'react-redux';
import SignUpErrors from './signup_errors';
import { Link, withRouter } from 'react-router';

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
    this.props.signup(this.state).then( () => {
      this.props.router.push('/');
    });
  }

  render() {
    return (
      <div id='signup' className='comp-d'>
          <div className='welcome-logo-sm'>
          <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          <h4>Adagio</h4>
          </div>
        <h3>Create your free Adagio account</h3>
        <SignUpErrors errors={this.props.errors} />
        <form onSubmit={ this.handleSubmit }>
          <div className='inputs-labels'>
          <label htmlFor="username">
            Username:
          </label>
            <br /><input
              type="text"
              placeholder="e.g. johndoe"
              onChange={ this.update('username') }
              value={this.state.username} />
          <br /><label htmlFor="email">
            Email:
          </label>
            <br /><input
              type="text"
              placeholder="e.g. john@email.com"
              onChange={ this.update('email') }
              value={this.state.email} />
          <br /><label htmlFor="email">
            Confirm email:
          </label>
            <br /><input
              id="email-confirm"
              type="text"
              placeholder="Confirm email"/>
          <br /><label htmlFor="first_name">
            First Name:
          </label>
            <br /><input
              type="text"
              placeholder="e.g. John"
              onChange={ this.update('first_name') }
              value={this.state.first_name} />
          <br /><label htmlFor="last_name">
            Last Name:
          </label>
            <br /><input
              type="text"
              placeholder="e.g. Doe"
              onChange={ this.update('last_name') }
              value={this.state.last_name} />
          <br /><label htmlFor="password">
            Password:
          </label>
            <br /><input
              type="password"
              placeholder="Choose a password"
              onChange={ this.update('password') }
              value={this.state.password} />
        </div>
          <br/><button className="clear-btn big-btn">Sign Up</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
