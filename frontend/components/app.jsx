import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import Search from './search';
import NowPlaying from './now_playing/now_playing';
import { fetchUser } from '../actions/users_actions';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUserId);
  }

  render() {
    return (
      <div id="app" className="custom-scrollbar">
        <div id="sidebar">
          <div id="nav-sidebar">
            <Nav />
          </div>
          <div id="search-container" className="hidden">
            <Search />
          </div>
        </div>
        <div id="main-window">
          {this.props.children}
        </div>
        <div id="now-playing-sidebar">
          <NowPlaying />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: (id) => { return dispatch(fetchUser(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
