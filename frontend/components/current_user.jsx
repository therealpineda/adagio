import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { Link } from 'react-router';

class CurrentUser extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div id='user-box' className="comp">
          <h6>CurrentUser</h6>
          <p>Welcome {this.props.currentUser}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div id='user-box' className="comp">
          <h6>CurrentUser</h6>
          <p>Not logged in.</p>
          <p><Link to='/login'>Log In</Link> | <Link to='/signup'>Sign Up</Link></p>
        </div>
      );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
