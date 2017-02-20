import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { playlistsArray } from '../../../reducers/selectors';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistDetail from './playlist_detail';
import AddPlaylistForm from './add_playlist_form';

class PlaylistIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlaylist: null
    }
  }

  componentWillMount() {
    this.props.fetchPlaylists(this.props.userId);
  }

  render() {
    const playlistIndexItems = this.props.playlists.map( (playlist) => {
      return (
        <PlaylistIndexItem
          key={playlist.id}
          playlist={playlist}
          onClick={this._selectPlaylist}
          selectedPlaylistId={this.props.playlistId} />
      );
    });
    return (
      <div id='playlist-index' className='comp-d'>
          <div id='playlist-index-sidebar'>
            <ul>
              <li
                className='playlist-index-item add-playlist'>
                <div className='playlist-index-new-playlist-plus'>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='playlist-index-title'>
                  <p>New Playlist</p>
                </div>
                <div className="playlist-form-dropdown">
                  <AddPlaylistForm />
                </div>
              </li>
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
  let selectedPlaylist = null;
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
