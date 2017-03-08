import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { NavLink } from './navlink';

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
      <div id='nav' className="comp-d">
        <div id="nav-links">
          <div id="nav-logo">
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          </div>

          <NavLink to='/browse/albums' className='nav-link'>
            <div className="nav-icon">
              <i className="fa fa-qrcode" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Browse</p>
            </div>
          </NavLink>

          <NavLink to="/my-music" className='nav-link'>
            <div className="nav-icon">
              <i className="fa fa-podcast" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Your Music</p>
            </div>
          </NavLink>

          <NavLink to='/explore-playlists' className='nav-link'>
            <div className="nav-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Explore Playlists</p>
            </div>
          </NavLink>

          </div>
        <div id='user-box'>
          <div id='user-box-user'>
            <Link to={`/explore-playlists/users/${this.props.userId}`}>
            <img src={this.props.userImg} />
            <p>{this.props.userFullName}</p>
            </Link>
          </div>
          <button
            onClick={this._logOut}>Log Out</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const userFullName = (
    state.session.currentUser.first_name + " " + state.session.currentUser.last_name )
  const userId = state.session.currentUser.id;
  const userImg = state.session.currentUser.image_url
  const currentUser = state.users[userId];

  if (!userId) {
    ownProps.router.replace('/welcome')
  }

  return {
    userFullName: userFullName,
    userId: userId,
    userImg: userImg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));

// SEARCH ICON - NOT YET IMPLEMENTED
  //
  // <div className={classStyleSearch} onClick={this._clickLink.bind(this,'search')}>
  //   <div className="nav-icon">
  //     <i className="fa fa-search" aria-hidden="true"></i>
  //   </div>
  //   <div className='nav-icon-text'>
  //     <p>Search</p>
  //   </div>
  // </div>
