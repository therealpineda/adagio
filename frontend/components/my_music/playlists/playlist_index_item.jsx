import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const PlaylistIndexItem = ({ playlist, authorId, selectedPlaylistId }) => {
  const classStyle = classNames({
    'playlist-index-item-container': true,
    'selected-playlist': playlist.id === parseInt(selectedPlaylistId, 10),
  });

  let authorName = ('');

  if (authorId !== playlist.author_id) {
    authorName = (
      <p className="playlist-index-author-text">by {playlist.author}</p>
    );
  }

  let playlistImage = (
    <div className="playlist-index-item-img playlist-default-image-sm">
      <img src={playlist.images[0]} alt={playlist.name} />
    </div>
  );

  if (playlist.images.length > 1) {
    playlistImage = (
      <div className="playlist-index-item-img">
        <div className="pl-img-row">
          <div className="pl-img-piece-sm">
            <img src={playlist.images[0]} alt={playlist.name} />
          </div>
          <div className="pl-img-piece-sm">
            <img src={playlist.images[1]} alt={playlist.name} />
          </div>
        </div>
        <div className="pl-img-row">
          <div className="pl-img-piece-sm">
            <img src={playlist.images[2]} alt={playlist.name} />
          </div>
          <div className="pl-img-piece-sm">
            <img src={playlist.images[3]} alt={playlist.name} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <li className={classStyle}>
      <Link to={`/my-music/playlists/${playlist.id}`}>
        <div className="playlist-index-item">
          { playlistImage }
          <div className="playlist-index-title">
            <p className="playlist-index-title-text">{playlist.name}</p>
            { authorName }
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PlaylistIndexItem;
