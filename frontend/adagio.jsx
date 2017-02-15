import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';

//testing
import * as Actions from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  //testing
  window.store = store;


  render(<Root store={store} />, root)
});


//testing
window.login = Actions.login;
window.signup = Actions.signup;
