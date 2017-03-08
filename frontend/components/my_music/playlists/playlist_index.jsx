import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { playlistsArray, playlistsArraySorted } from '../../../reducers/selectors';
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

  // redirect if URL is not in state (yet, or deleted)
  componentWillReceiveProps(nextProps) {
    if (nextProps.playlists.length > 0) {
      const incomingPlaylistId = parseInt(nextProps.params.playlistId);
      const playlist = nextProps.playlists.find( (pl) => pl.id === incomingPlaylistId );
      if (!playlist) {
        const playlists = nextProps.playlists;
        const mostRecentPlaylist = playlists[0];
        const id = mostRecentPlaylist.id;
        this.props.router.push(`/my-music/playlists/${id}`);
      }
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
    const userId = this.props.userId
    const selectedPlaylist = this.props.params.playlistId;
    const playlistIndexItems = this.props.playlists.map( (playlist) => {
      return (
        <PlaylistIndexItem
          key={playlist.id}
          playlist={playlist}
          selectedPlaylistId={selectedPlaylist}
          authorId={userId} />
      );
    });
    return (
      <div id='playlist-index'>
          <div
            id='playlist-index-sidebar'
            className='custom-scrollbar'>
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

  const userId = state.session.currentUser.id;
  let playlists = [];
  if (state.users[userId]) {
    const userPlaylists = state.users[userId].playlists;
    const followedPlaylists = state.users[userId].followed_playlists
    playlists = userPlaylists.concat(followedPlaylists);
  }

  return {
    userId: userId,
    playlists: playlistsArray(playlists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex));
