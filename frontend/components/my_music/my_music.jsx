import React from 'react';
import PlaylistIndex from './playlists/playlist_index';
import { fetchUser } from '../../actions/users_actions';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

const MyMusic = ({children}) => {
  return (
    <div id='my-music' className="comp-d">
      <nav><ul>
        <li>Playlists</li>
        <li>Songs</li>
        <li>Artists</li>
        <li>Albums</li>
      </ul></nav>
      <main>
        { children }
      </main>
    </div>
  );
}


export default MyMusic;
