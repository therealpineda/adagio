import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import Welcome from './welcome';
import LogIn from './login'
import SignUp from './signup'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Welcome} />
          <Route path="login" component={LogIn} />
          <Route path="signup" component={SignUp} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
