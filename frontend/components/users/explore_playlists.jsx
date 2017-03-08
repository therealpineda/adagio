import React from 'react';
import UsersIndex from './users_index';
import { connect } from 'react-redux';

class ExplorePlaylists extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const id = this.props.currentUserId
    if (id) {
      this.props.router.push(`/explore-playlists/users/${id}`);
    }
  }

  render() {
    return (
      <div id='explore-playlists'>
        <div id='explore-playlists-users-header'>
          <h2>Users</h2>
        </div>
        <div id='ep-main'>
          <UsersIndex />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser.id
  };
}

export default connect(mapStateToProps)(ExplorePlaylists);
