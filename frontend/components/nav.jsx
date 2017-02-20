import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'your-music'
    };
    this._logOut = this._logOut.bind(this);
  }

  _logOut() {
    this.props.logout().then( () => {
      this.props.router.replace('/welcome');
    })
  }

  _clickLink(route, e) {
    $(document.getElementsByClassName('nav-link')).attr('class', 'nav-link');
    e.currentTarget.className += " active-link";
    this.props.router.push(`${route}`);
  }

  render() {
    return (
      <div id='nav' className="comp-d">
        <div id="nav-links">
          <div id="nav-logo">
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          </div>
          <div className="nav-link" onClick={this._clickLink.bind(this,'search')}>
            <div className="nav-icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Search</p>
            </div>
          </div>

          <div className="nav-link" onClick={this._clickLink.bind(this,'browse')}>
            <div className="nav-icon">
              <i className="fa fa-qrcode" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Browse</p>
            </div>
          </div>

          <div className="nav-link active-link" onClick={this._clickLink.bind(this,'my-music')}>
            <div className="nav-icon">
              <i className="fa fa-podcast" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Your Music</p>
            </div>
          </div>

          <div className="nav-link" onClick={this._clickLink.bind(this,'explore-playlists')}>
            <div className="nav-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className='nav-icon-text'>
              <p>Explore Playlists</p>
            </div>
          </div>

          </div>
        <div id='user-box'>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
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
