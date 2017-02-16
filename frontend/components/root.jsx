import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import Welcome from './welcome/welcome';
import Browse from './browse';
import MyMusic from './my_music';

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
          <Route path="/welcome" component={Welcome} onEnter={this._redirectIfLoggedIn}/>
          <Route path="/" component={App} onEnter={this._redirectUnlessLoggedIn} >
            <IndexRedirect to="my-music" />
            <Route path="browse" component={Browse} />
            <Route path="my-music" component={MyMusic} >
              <Route path="playlist/:playlistId" />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  };
}

export default Root;
