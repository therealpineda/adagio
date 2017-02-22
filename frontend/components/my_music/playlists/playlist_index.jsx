import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { playlistsArray } from '../../../reducers/selectors';
// import { fetchPlaylists } from '../../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistDetailPage from './playlist_detail_page';
import AddPlaylistForm from './add_playlist_form';

class PlaylistIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlaylist: null
    }
    this._toggleDisplayForm = this._toggleDisplayForm.bind(this);
  }

  // redirect if URL is not in state
  componentWillReceiveProps(nextProps) {
    const ids = nextProps.playlists.map((playlist) => {
      return playlist.id
    });
    if (!ids.includes(parseInt(nextProps.params.playlistId))) {
      this.props.router.push(`/my-music/playlists/${nextProps.playlists[0].id}`)
    }
  }

  _toggleDisplayForm(e) {
    e.preventDefault();
    const form = $('.add-playlist-form');
    form.toggleClass('hidden-form');
    if (!form.attr('class').includes('hidden-form')) {
      const input = $('#add-playlist-input');
      input.focus();
    }
  }

  render() {
    const playlistIndexItems = this.props.playlists.map( (playlist) => {
      return (
        <PlaylistIndexItem
          key={playlist.id}
          playlist={playlist}
          selectedPlaylistId={this.props.playlistId}
          authorId={this.props.userId} />
      );
    });
    return (
      <div id='playlist-index' className='comp-d'>
          <div id='playlist-index-sidebar'>
            <ul id='playlist-index-list'>
              <li
                className='playlist-index-item-container add-playlist'
                onClick={this._toggleDisplayForm}>
                <div className='playlist-index-new-playlist-plus'>
                  <i className='fa fa-plus' aria-hidden='true'></i>
                </div>
                <div className='playlist-index-title add-playlist-text-container'>
                  <p>New Playlist</p>
                </div>
              </li>
              <li className='playlist-index-item-container add-playlist-form hidden-form'>
                  <AddPlaylistForm />
              </li>
              { playlistIndexItems }
            </ul>
          </div>
          <div id='playlist-index-main'>
            <PlaylistDetailPage playlist={this.props.selectedPlaylist} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let playlistId;
  if (ownProps.params.playlistId) {
    playlistId = ownProps.params.playlistId;
  } else {
    const ids = Object.keys(state.playlists);
    playlistId = ids[ids.length - 1];
  }
  const selectedPlaylist = state.playlists[playlistId];

  const userPlaylists = state.session.currentUser.playlists;
  const userFollowedPlaylists = state.session.currentUser.followed_playlists;

  return {
    userId: state.session.currentUser.id,
    playlists: userPlaylists.concat(userFollowedPlaylists),
    playlistId: playlistId,
    selectedPlaylist: selectedPlaylist
  };
};

// playlists: playlistsArray(state.playlists),
// fetchPlaylists: (userId) => { return dispatch(fetchPlaylists(userId)); }

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex));
