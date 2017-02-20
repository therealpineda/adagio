import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const PlaylistIndexItem = (props) => {

  let classStyle = classNames({
    'playlist-index-item-container': true,
    'selected-playlist': props.playlist.id === parseInt(props.selectedPlaylistId)
  });

  return (
    <li className={classStyle}>
      <Link to={`/my-music/playlists/${props.playlist.id}`}>
        <div className='playlist-index-item'>
          <div className='playlist-index-item-img'>
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          </div>
          <div className='playlist-index-title'>
            <p className="playlist-index-title-text">{props.playlist.name}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PlaylistIndexItem;