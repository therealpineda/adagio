import React from 'react';
import PlaylistIndex from './playlists/playlist_index';
import { fetchUser } from '../../actions/users_actions';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class MyMusic extends React.Component {

  // componentWillReceiveProps() {
  //   const id = this.props.defaultPlaylistId
  //   if (id) {
  //     this.props.router.push(`/my-music/playlists/${id}`);
  //   }
  // }

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

// const mapStateToProps = (state, ownProps) => {
//   let defaultPlaylistId = null;
//   const userId = state.session.currentUser.id;
//   if (!ownProps.params.playlistId) {
//     const userPlaylists = state.users[userId].playlists;
//     defaultPlaylistId = userPlaylists[userPlaylists.length - 1].id;
//   }
//   return {
//     defaultPlaylistId: defaultPlaylistId,
//     currentUserId: state.session.currentUser.id
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCurrentUser: (id) => { return dispatch(fetchUser(id)); }
//   };
// }

export default withRouter(connect(null, null)(MyMusic));
