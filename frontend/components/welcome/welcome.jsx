import React from 'react';
import SignUp from './signup';
import LogIn from './login';
import { connect } from 'react-redux';
import { receiveErrors } from "../../actions/session_actions";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      formType: ''
    }
    this._logIn = this._logIn.bind(this);
    this._signUp = this._signUp.bind(this);
  }

  _logIn(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState( { formType: 'login' } );
  }

  _signUp(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState ( {formType: 'signup' });
  }

  render() {
    let sideForm = (
      <div id='welcome-buttons'>
        <div id='welcome-logo'>
          <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          <p id="logo-text">Adagio</p>
        </div>
        <button className="green-big-btn" onClick={ this._logIn }>Log In</button>
        <button className="clear-btn" onClick={ this._signUp }>Sign Up</button>
      </div>
    )

    if (this.state.formType === 'login') {
      sideForm = <LogIn />
    } else if (this.state.formType === 'signup'){
      sideForm = <SignUp />
    }
    let sideLink = "";
    if (this.state.formType === 'login') {
      sideLink = <p>Don't have an account? <a onClick={this._signUp}>Sign up here</a>!</p>
    } else if (this.state.formType === 'signup'){
      sideLink = <p><a onClick={this._logIn}>Already have an account? Log in here</a>.</p>
    }
    return (
      <div id='welcome-background' className="comp-d">
      <div id='welcome'>
        <div id='side-form'>
            { sideForm }
            { sideLink }
        </div>
        <div id='landing-page'>
          <h1>Get the right music, right now.</h1>
          <h2>Listen to a handful of songs for free.</h2>
          <ul id='landing-list'>
            <li className="landing-list-item">
              <div className="landing-list-check">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <p>Search & discover music you'll love</p>
            </li>
            <li className="landing-list-item">
              <div className="landing-list-check">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <p>Create playlists of your favorite music</p>
            </li>
            <li className="landing-list-item">
              <div className="landing-list-check">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <p>Adagio Radio - unlimited stations and skips</p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => { return dispatch(receiveErrors([])); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
