import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';

//testing
import * as Actions from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  //testing
  window.store = store


  render(<Root store={store} />, root)
});


//testing
window.login = Actions.login;
window.signup = Actions.signup;
