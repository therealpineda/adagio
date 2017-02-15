import React from 'react';
import SignUp from './signup';
import LogIn from './login';
import LandingForm from './landing_form'

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
    this.setState( { formType: 'login' } );
  }

  _signUp(e) {
    e.preventDefault();
    this.setState ( {formType: 'signup' });
  }

  render() {
    let sideForm = (
      <div id='welcome-buttons'>
        <div id='welcome-logo'>
        <img src="http://localhost:3000/assets/logo-60cd3bce04d4fdf3237d6aeff76527366ec71368dc71cad1a867f157213f551a.png" />
        <p>Adagio</p>
        </div>
        <button className="green-big-btn" onClick={ this._logIn }>Log In</button>
        <button className="clear-big-btn" onClick={ this._signUp }>Sign Up</button>
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
      sideLink = <p>Already have an account? <a onClick={this._logIn}>Log in here</a>.</p>
    }
    return (
      <div id='welcome-background' className="comp">
      <div id='welcome'>
        <div id='side-form'>
            { sideForm }
            { sideLink }
        </div>
        <div id='landing-page'>
          <h1>Get the right music, right now.</h1>
          <h2>Listen to millions of songs for free.</h2>
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

export default Welcome;
