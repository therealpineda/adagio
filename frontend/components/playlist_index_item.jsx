import React from 'react';
import { Link } from 'react-router';

const PlaylistIndexItem = (props) => {

  return (
    <li className='playlist-index-item-container'>
      <Link to={`/my-music/playlists/${props.playlist.id}`}>
        <div className='playlist-index-item'>
          <div className='playlist-index-item-img'>
            <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
          </div>
          <div className='playlist-index-title'>
            <span>{props.playlist.name}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PlaylistIndexItem;
