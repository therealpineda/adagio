import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UsersIndex from './users_index';

class ExplorePlaylists extends React.Component {
  componentWillMount() {
    this.checkRedirect();
  }

  componentWillReceiveProps() {
    this.checkRedirect();
  }

  checkRedirect() {
    const userId = this.props.params.userId;
    if (!userId) {
      const currentUserId = this.props.currentUserId;
      this.props.router.push(`/explore-playlists/users/${currentUserId}`);
    }
  }

  render() {
    return (
      <div id="explore-playlists">
        <div id="explore-playlists-users-header">
          <h2>Users</h2>
        </div>
        <div id="ep-main">
          <UsersIndex />
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

export default withRouter(connect(mapStateToProps)(ExplorePlaylists));
