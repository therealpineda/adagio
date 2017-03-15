import React from 'react';
import { Link } from 'react-router';

const UserPlaylistIndex = ({ playlists }) => {
  const playlistItems = playlists.map((playlist) => {
    let playlistImage = (
      <div className="user-playlist-index-item-img playlist-default-image">
        <img src={playlist.images[0]} alt={playlist.name} />
      </div>
    );
    if (playlist.images.length > 1) {
      playlistImage = (
        <div className="user-playlist-index-item-img">
          <div className="pl-img-row">
            <div className="pl-img-piece">
              <img src={playlist.images[0]} alt={playlist.name} />
            </div>
            <div className="pl-img-piece">
              <img src={playlist.images[1]} alt={playlist.name} />
            </div>
          </div>
          <div className="pl-img-row">
            <div className="pl-img-piece">
              <img src={playlist.images[2]} alt={playlist.name} />
            </div>
            <div className="pl-img-piece">
              <img src={playlist.images[3]} alt={playlist.name} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <li key={playlist.id} className="user-playlist-index-item">
        <Link to={`/playlists/${playlist.id}`}>
          { playlistImage }
          <div className="user-playlist-index-item-details">
            <p className="user-playlist-index-name">{playlist.name}</p>
            <p className="user-playlist-index-songs">
              {playlist.num_songs} songs, {playlist.duration}
            </p>
            <p className="user-playlist-index-followers">{playlist.followers_count}</p>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <div id="user-playlist-index">
      <ul
        id="user-playlists-index-list"
        className="custom-scrollbar"
      >
        { playlistItems }
      </ul>
    </div>
  );
};

export default UserPlaylistIndex;
