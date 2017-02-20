import React from 'react';
import RCPlaylistIndexItem from './rc_playlist_index_item';
import { playlistsArray } from '../../../reducers/selectors';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { connect } from 'react-redux';


class RCPlaylistIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPlaylists(this.props.userId);
  }

  render() {
    const playlistIndexItems = this.props.playlists.map( (playlist) => {
      return (
      <RCPlaylistIndexItem
        key={playlist.id}
        name={playlist.name}
        songId={this.props.clickedSong.id}
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

}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.currentUser.id,
    playlists: playlistsArray(state.playlists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: (userId) => { return dispatch(fetchPlaylists(userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RCPlaylistIndex);
