import React from 'react';
import PlaylistIndex from './playlists/playlist_index';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class MyMusic extends React.Component {

  componentWillReceiveProps() {
    const id = this.props.defaultPlaylistId
    if (id) {
      this.props.router.push(`/my-music/playlists/${id}`);
    }
  }

  render() {
    return (
      <div id='my-music' className="comp-d">
        <nav><ul>
          <li>Playlists</li>
          <li>Songs</li>
          <li>Artists</li>
          <li>Albums</li>
        </ul></nav>
      <main>
        <div id='playlist-index-container'>
          { this.props.children }
        </div>
      </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let defaultPlaylistId = null;
  if (!ownProps.params.playlistId) {
    const userPlaylists = state.session.currentUser.playlists;
    defaultPlaylistId = userPlaylists[userPlaylists.length - 1].id;
  }
  return {
    defaultPlaylistId: defaultPlaylistId
  };
};

export default withRouter(connect(mapStateToProps, null)(MyMusic));
