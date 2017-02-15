import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this._logOut = this._logOut.bind(this);
  }

  _logOut() {
    this.props.logout().then( () => {
      this.props.router.replace('/welcome');
    })
  }

  render() {
    return (
      <div id='nav' className="comp">
        <div id="nav-links">
        <div id="nav-logo">
          <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
        </div>
          <Link to="">Search</Link>
          <br /><Link to="">Browse</Link>
          <br /><Link to="">Your Music</Link>
          <br /><Link to="">Explore Playlists</Link>
        </div>
        <div id='user-box'>
          <p>{this.props.userFullName}</p>
          <button
            onClick={this._logOut}>Log Out</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userFullName = (
    state.session.currentUser.first_name + " " + state.session.currentUser.last_name )
  return {
    userFullName: userFullName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
