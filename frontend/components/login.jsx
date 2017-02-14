import React from 'react';
import { login } from '../actions/session_actions';
import { connect } from 'react-redux';
import LogInErrors from './login_errors';

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
    this.props.login(this.state);
  }

  guestLogIn(e) {
    e.preventDefault();
    this.props.login({username: 'test_user', password: 'password'});
    this.props.router
  }

  render() {
    return (
      <div id='login' className='comp'>
        <h6>LogIn</h6>
        <p>[LOGO]</p>
        <LogInErrors errors={this.props.errors} />
        <button onClick={ this.guestLogIn }>Guest Log In</button>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">
            Username
            <br /><input
              type="text"
              placeholder="Adagio username"
              onChange={ this.update('username') }
              value={this.state.username} />
          </label>
          <br /><label htmlFor="password">
            Password
            <br /><input
              type="text"
              placeholder="Password"
              onChange={ this.update('password') }
              value={this.state.password} />
          </label>
          <br/><button>Log In</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
