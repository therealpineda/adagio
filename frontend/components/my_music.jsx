import React from 'react';
import PlaylistIndex from './playlist_index';
import PlaylistDetail from './playlist_detail';

class MyMusic extends React.Component {
  render() {
    return (
      <div id='my-music' className="comp">
        <h6>MyMusic</h6>
        <nav><ul>
          <li>Playlists</li>
          <li>Songs</li>
          <li>Artists</li>
          <li>Albums</li>
        </ul></nav>
      <main>
        <div id='playlist-index-container'>
          <PlaylistIndex />
        </div>
      </main>
      </div>
    );
  }
}

export default MyMusic;
