import React from 'react';
import { connect } from 'react-redux';
import UsersIndex from './users_index';

class ExplorePlaylists extends React.Component {
  componentWillMount() {
    const id = this.props.currentUserId;
    if (id) {
      this.props.router.push(`/explore-playlists/users/${id}`);
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

export default connect(mapStateToProps)(ExplorePlaylists);
