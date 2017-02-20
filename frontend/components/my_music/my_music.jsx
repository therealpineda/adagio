import React from 'react';
import PlaylistIndex from './playlists/playlist_index';
import PlaylistDetail from './playlists/playlist_detail';

class MyMusic extends React.Component {
  render() {
    return (
      <div id='my-music' className="comp-d">
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