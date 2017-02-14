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
    let sideForm;
    if (this.state.formType === 'login') {
      sideForm = <LogIn />
    } else if (this.state.formType === 'signup'){
      sideForm = <SignUp />
    } else {
      sideForm = <LandingForm />
    }
    let sideLink = "";
    if (this.state.formType === 'login') {
      sideLink = <p>Don't have an account? <a onClick={this._signUp}>Sign up here</a>!</p>
    } else if (this.state.formType === 'signup'){
      sideLink = <p>Already have an account? <a onClick={this._logIn}>Log in here</a>.</p>
    }
    return (
      <div id='welcome' className="comp">
        <h6>Welcome</h6>
        <button onClick={ this._logIn }>Log In</button>
        <button onClick={ this._signUp }>Sign Up</button>
        { sideForm }
        { sideLink }
      </div>
    );
  }
}

export default Welcome;
