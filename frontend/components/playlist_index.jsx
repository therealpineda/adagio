import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { playlistsArray } from '../reducers/selectors';
import { fetchPlaylists } from '../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistDetail from './playlist_detail';

class PlaylistIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlaylist: null
    }
    this._selectPlaylist = this._selectPlaylist.bind(this);
  }

  componentWillMount() {
    this.props.fetchPlaylists(this.props.userId);
  }

  _selectPlaylist(e) {
    e.preventDefault();
    debugger
  }

  render() {
    const playlistIndexItems = this.props.playlists.map( (playlist) => {
      return (
        <PlaylistIndexItem
          key={playlist.id}
          playlist={playlist}
          onClick={this._selectPlaylist} />
      );
    });
    return (
      <div id='playlist-index' className='comp'>
          <div id='playlist-index-sidebar'>
            <ul>
              { playlistIndexItems }
            </ul>
          </div>
          <div id='playlist-index-main'>
            <PlaylistDetail playlist={this.props.selectedPlaylist} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let playlistId = null;
  let selectedPlaylist = {};
  if (ownProps.params.playlistId) {
    playlistId = ownProps.params.playlistId;
    selectedPlaylist = state.playlists[playlistId];
  }
  return {
    userId: state.session.currentUser.id,
    playlists: playlistsArray(state.playlists),
    playlistId: playlistId,
    selectedPlaylist: selectedPlaylist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: (userId) => { return dispatch(fetchPlaylists(userId)); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex));
