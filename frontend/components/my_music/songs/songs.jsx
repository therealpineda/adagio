import React from 'react';
import SongsIndex from '../songs_index';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { connect } from 'react-redux';

class Songs extends React.Component {
  componentWillMount() {
    this.props.fetchPlaylists(this.props.userId);
  }

  render() {
    return(
      <div
        id='my-music-songs-container'
        className='custom-scrollbar'>
        <SongsIndex
          songs={this.props.songs} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const userId = state.session.currentUser.id;
  let songs = []
  Object.keys(state.playlists).forEach((id) => {
    const playlistSongs = state.playlists[id].songs
    playlistSongs.forEach((song) => {
      if (!songs.includes(song)) {
        songs.push(song);
      }
    });
  })
  return {
    userId: userId,
    songs: songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: (userId) => {return dispatch(fetchPlaylists(userId));}
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Songs);
