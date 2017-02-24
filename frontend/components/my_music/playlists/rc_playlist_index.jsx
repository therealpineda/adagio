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
    userId: userId,
    playlists: state.users[userId].playlists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: (userId) => { return dispatch(fetchPlaylists(userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RCPlaylistIndex);
