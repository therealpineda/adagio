import React from 'react';
import { Link } from 'react-router';

class UserPlaylistIndex extends React.Component {
  render() {
    let playlists = this.props.playlists.map ((playlist) => {
        return (
          <li key={playlist.id} className="user-playlist-index-item">
            <Link to={`/playlists/${playlist.id}`}>
              <div className='user-playlist-index-item-img'>
                <img src="https://s3.amazonaws.com/adagio-prod/images/default/playlist_img.jpg"/>
              </div>
              <div className='user-playlist-index-item-details'>
                <p className="user-playlist-index-name">{playlist.name}</p>
                <p className="user-playlist-index-songs">{playlist.num_songs} songs, {playlist.duration}</p>
                <p className="user-playlist-index-followers">{playlist.followers_count}</p>
              </div>
            </Link>
          </li>
        );
    });
    return (
      <div id='user-playlist-index'>
        <ul
          id='user-playlists-index-list'
          className='custom-scrollbar'>
          { playlists }
        </ul>
      </div>
    );

  }
}

export default UserPlaylistIndex;
