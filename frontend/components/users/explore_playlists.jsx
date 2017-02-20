import React from 'react';
import UsersIndex from './users_index';

class ExplorePlaylists extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='explore-playlists' className="comp">
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

export default ExplorePlaylists;
