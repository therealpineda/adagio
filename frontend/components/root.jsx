import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import Welcome from './welcome';
import Main from './main';
import Browse from './browse';

class Root extends React.Component {
  constructor(props) {
    super();
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
  }

  _redirectIfLoggedIn() {
    if (this.props.store.getState().session.currentUser.username) {
      hashHistory.replace('/');
    }
  }

  _redirectUnlessLoggedIn() {
    if (!this.props.store.getState().session.currentUser.username) {
      hashHistory.replace('/welcome');
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App} >
            <Route path="welcome" component={Welcome} onEnter={this._redirectIfLoggedIn}/>
            <IndexRoute component={Main} onEnter={this._redirectUnlessLoggedIn}>
              <Route path="browse" component={Browse} />
            </IndexRoute>
          </Route>
        </Router>
      </Provider>
    );
  };
}

export default Root;
