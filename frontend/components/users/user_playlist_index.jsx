import React from 'react';

class UserPlaylistIndex extends React.Component {
  render() {
    let playlists = this.props.playlists.map ((playlist) => {
        return (
          <li key={playlist.id} className="user-playlist-index-item">
            <p className="user-playlist-index-name">{playlist.name}</p>
            <p className="user-playlist-index-songs">{playlist.num_songs} songs, {playlist.duration}</p>
            <p className="user-playlist-index-followers">[playlist follower count]</p>
          </li>
        );
    });
    return (
      <div id='user-playlist-index'>
        <ul>
          { playlists }
        </ul>
      </div>
    );

  }
}

export default UserPlaylistIndex;
