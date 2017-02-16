import React from 'react';
import { login } from '../actions/session_actions';
import { connect } from 'react-redux';
import LogInErrors from './login_errors';
import { withRouter } from 'react-router';

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then( () => {
      this.props.router.push('/');
    });
  }

  guestLogIn(e) {
    e.preventDefault();
    this.props.login({username: 'johndoe', password: 'password'}).then( () => {
      this.props.router.push('/');
    });
  }

  render() {
    return (
      <div id='login' className='comp-d'>
          <div className='welcome-logo-sm'>
          <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          <h4>Adagio</h4>
          </div>
        <LogInErrors errors={this.props.errors} />
        <button
          className="green-big-btn"
          onClick={ this.guestLogIn }>Guest Log In</button>
        <form onSubmit={ this.handleSubmit }>
          <div className='inputs-labels'>
          <label htmlFor="username">
            Username
          </label>
            <br /><input
              className="input-field"
              type="text"
              placeholder="Adagio username"
              onChange={ this.update('username') }
              value={this.state.username} />
          <br /><label htmlFor="password">
            Password
          </label>
            <br /><input
              type="password"
              placeholder="Password"
              onChange={ this.update('password') }
              value={this.state.password} />
          </div>
          <br/><button className="clear-btn big-btn">Log In</button>
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
    login: (user) => { return dispatch(login(user)); }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
