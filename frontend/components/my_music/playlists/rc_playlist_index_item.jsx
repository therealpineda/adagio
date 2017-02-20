import React from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist } from '../../../actions/playlist_actions';

// name
// key

class RCPlaylistIndexItem extends React.Component {
    constructor(props) {
      super(props)
    }

    _addSongToPlaylist(songId, playlistId) {
      this.props.addSongToPlaylist(songId, playlistId);
    }

    render() {
      return (
        <li
          className='rc-playlist-index-item'
          onClick={this._addSongToPlaylist.bind(this, this.props.songId, this.props.playlistId)}>
          {this.props.name}
        </li>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSongToPlaylist: (songId, playlistId) => { return dispatch (addSongToPlaylist(songId, playlistId)); }
  };
};

export default connect(null, mapDispatchToProps)(RCPlaylistIndexItem);
