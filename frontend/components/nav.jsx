import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { NavLink } from './navlink';

class Nav extends React.Component {
  constructor() {
    super();
    this._logOut = this._logOut.bind(this);
    this._toggleSearch = this._toggleSearch.bind(this);
    this._closeSearch = this._closeSearch.bind(this);
  }

  _logOut() {
    this.props.logout().then(() => {
      this.props.router.replace('/welcome');
    });
  }

  _toggleSearch() {
    const search = document.getElementById('search-container');
    if (search.className === 'custom-scrollbar') {
      search.className = 'hidden';
    } else {
      search.className = 'custom-scrollbar';
      document.addEventListener('click', this._closeSearch);
    }
  }

  _closeSearch(e) {
    const search = document.getElementById('search-container');
    const min = 90;
    const max = 90 + search.offsetWidth;
    const click = e.clientX;
    if (click < min || click > max) {
      search.className = 'hidden';
      document.removeEventListener('click', this._closeSearch);
    }
  }

  render() {
    return (
      <div id="nav">
        <div id="nav-links">
          <div id="nav-logo">
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" alt="Adagio" />
          </div>
          <NavLink to="" className="nav-link" onClick={this._toggleSearch}>
            <div className="nav-icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="nav-icon-text">
              <p>Search</p>
            </div>
          </NavLink>

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
