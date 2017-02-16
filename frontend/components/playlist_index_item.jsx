import React from 'react';
import { Link } from 'react-router';

const PlaylistIndexItem = (props) => {

  return (
    <Link to={`/my-music/playlist/${props.playlist.id}`}>
      <li className='playlist-index-item'>
        <div className='playlist-index-img'>
          <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
        </div>
        <div className='playlist-index-title'>
          <p>{props.playlist.name}</p>
        </div>
      </li>
    </Link>
  );
};

export default PlaylistIndexItem;
