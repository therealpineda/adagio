import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router';

class CurrentUser extends React.Component {
  constructor() {
    super();
    this._logOut = this._logOut.bind(this);
  }

  _logOut() {
    this.props.logout().then( () => {
      this.props.router.replace('/');
    })
  }

  render() {
  let userInfo = <p>Not logged in.</p>;
  if (this.props.currentUser.username) {
    userInfo = (
      <p>{this.props.currentUser.first_name} {this.props.currentUser.last_name} 
      <button
        className="log-out-btn"
        onClick={this._logOut}>Log Out</button></p>
    )
  }
    return (
      <div id='user-box' className="comp">
        <h6>CurrentUser</h6>
        { userInfo }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentUser));
