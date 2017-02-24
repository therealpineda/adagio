import React from 'react';
import RCPlaylistIndexItem from './rc_playlist_index_item';
import { connect } from 'react-redux';

const RCPlaylistIndex = ({playlists, clickedSong}) => {

  const playlistIndexItems = playlists.map( (playlist) => {
    return (
    <RCPlaylistIndexItem
      key={playlist.id}
      name={playlist.name}
      songId={clickedSong.id}
      playlistId={playlist.id} />
    );
  });

  return (
    <div id='rc-playlist-index' className="comp-d">
      <ul>
        { playlistIndexItems }
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const userId = state.session.currentUser.id;
  return {
    playlists: state.users[userId].playlists
  };
};

export default connect(mapStateToProps, null)(RCPlaylistIndex);
