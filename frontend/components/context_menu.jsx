import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { playSong, addSong } from '../actions/play_queue_actions';
import { removeSongFromPlaylist } from '../actions/playlist_actions';
import RCPlaylistIndex from './my_music/playlists/rc_playlist_index';

class ContextMenu extends React.Component {
  constructor() {
    super();
    this.playSong = this.playSong.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
  }

  playSong() {
    this.props.playSong(this.props.song);
  }

  addToQueue() {
    this.props.addSong(this.props.song);
  }

  removeFromPlaylist() {
    const songId = this.props.song.playlist_song_id;
    const playlistId = this.props.params.playlistId;
    this.props.removeSongFromPlaylist(songId, playlistId);
  }

  render() {
    let menuContent = '';
    const modal = document.querySelector('.context-menu');
    if (this.props.open) {
      const song = this.props.song
      const pos = this.props.pos;
      modal.style.top = `${pos[1]}px`;
      modal.style.left = `${pos[0]}px`;
      let removeFromPlaylist = '';
      const playlistId = this.props.params.playlistId;
      if (playlistId) {
        const authorId = this.props.playlists[playlistId].author_id;
        if (authorId === this.props.userId) {
          removeFromPlaylist = (
            <li className="menu-item" onClick={this.removeFromPlaylist}>
              <p>Remove From Playlist</p>
            </li>
          );
        }
      }
      menuContent = (
        <ul>
          <li className="context-menu-song-title menu-item">
            <p>{song.title}</p>
          </li>
          <li className="menu-item" onClick={this.playSong}>
            <p>Play</p>
          </li>
          <li  className="menu-item" onClick={this.addToQueue}>
            <p>Add to Play Queue</p>
          </li>
          { removeFromPlaylist }
          <li className="menu-item" >
            <p>Add to Playlist:</p>
            <RCPlaylistIndex
              clickedSong={song}
            />
          </li>
        </ul>
      );
    }

    return (
      <div className="context-menu custom-scrollbar">
        { menuContent }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.session.currentUser.id,
    playlists: state.playlists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (song) => { return dispatch(playSong(song)); },
    addSong: (song) => { return dispatch(addSong(song)); },
    removeSongFromPlaylist: (songId, playlistId) => {
      return dispatch(removeSongFromPlaylist(songId, playlistId));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContextMenu));
