import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { NavLink } from './navlink';

class Nav extends React.Component {
  constructor() {
    super();
    this._logOut = this._logOut.bind(this);
  }

  _logOut() {
    this.props.logout().then(() => {
      this.props.router.replace('/welcome');
    });
  }

  render() {
    return (
      <div id="nav">
        <div id="nav-links">
          <div id="nav-logo">
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" alt="Adagio" />
          </div>

          <NavLink to="/browse/albums" className="nav-link">
            <div className="nav-icon">
              <i className="fa fa-qrcode" aria-hidden="true"></i>
            </div>
            <div className="nav-icon-text">
              <p>Browse</p>
            </div>
          </NavLink>

          <NavLink to="/my-music" className="nav-link">
            <div className="nav-icon">
              <i className="fa fa-podcast" aria-hidden="true"></i>
            </div>
            <div className="nav-icon-text">
              <p>Your Music</p>
            </div>
          </NavLink>

          <NavLink to="/explore-playlists" className="nav-link">
            <div className="nav-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className="nav-icon-text">
              <p>Explore Playlists</p>
            </div>
          </NavLink>

        </div>
        <div id="user-box">
          <div id="user-box-user">
            <Link to={`/explore-playlists/users/${this.props.userId}`}>
              <img src={this.props.userImg} alt={this.props.userName} />
              <p>{this.props.userName}</p>
            </Link>
          </div>
          <button onClick={this._logOut}>Log Out</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const userId = currentUser.id;
  const userName = currentUser.name;
  const userImg = currentUser.image_url;

  if (!userId) {
    ownProps.router.replace('/welcome');
  }

  return {
    userId,
    userName,
    userImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
