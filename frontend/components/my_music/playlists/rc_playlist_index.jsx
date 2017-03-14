import React from 'react';
import { connect } from 'react-redux';
import RCPlaylistIndexItem from './rc_playlist_index_item';

const RCPlaylistIndex = ({ playlists, clickedSong }) => {
  const playlistIndexItems = playlists.map((playlist) => {
    return (
      <RCPlaylistIndexItem
        key={playlist.id}
        name={playlist.name}
        songId={clickedSong.id}
        playlistId={playlist.id}
      />
    );
  });

  return (
    <div id="rc-playlist-index">
      <ul>
        { playlistIndexItems }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const userId = state.session.currentUser.id;
  return {
    playlists: state.users[userId].playlists,
  };
};

export default connect(mapStateToProps, null)(RCPlaylistIndex);
