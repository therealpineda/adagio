import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const PlaylistIndexItem = ( { playlist, authorId, selectedPlaylistId } ) => {

  let classStyle = classNames({
    'playlist-index-item-container': true,
    'selected-playlist': playlist.id === parseInt(selectedPlaylistId)
  });

  let authorName = ("");

  if (authorId !== playlist.author_id) {
    authorName = (
      <p className="playlist-index-author-text">by {playlist.author}</p>
    );
  }

  return (
    <li className={classStyle}>
      <Link to={`/my-music/playlists/${playlist.id}`}>
        <div className='playlist-index-item'>
          <div className='playlist-index-item-img'>
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          </div>
          <div className='playlist-index-title'>
            <p className="playlist-index-title-text">{playlist.name}</p>
            { authorName }
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PlaylistIndexItem;
