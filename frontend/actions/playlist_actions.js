import * as PlaylistApiUtil from '../util/playlist_api_util';
import { receiveUser } from './users_actions';
import { receiveCurrentUser } from './session_actions';

export const fetchPlaylists = (userId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylists(userId).then( (playlists) => {
      return dispatch(receivePlaylists(playlists));
    });
  };
};

export const fetchPlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylist(playlistId).then( (playlist) => {
      dispatch(receivePlaylist(playlist));
      return playlist;
    });
  };
};

export const addPlaylist = (playlist, currentUser) => {
  return (dispatch) => {
    return PlaylistApiUtil.addPlaylist(playlist).then( (playlist) => {
      currentUser.playlists.push(playlist);
      dispatch(receiveUser(currentUser));
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const deletePlaylist = (id, currentUser) => {
  return (dispatch) => {
    return PlaylistApiUtil.deletePlaylist(id).then ( (playlist) => {

      const updatedPlaylists = []
      currentUser.playlists.forEach((userPlaylist) => {
        if (userPlaylist.id !== playlist.id) {
          updatedPlaylists.push(userPlaylist)
        }
      })
      currentUser.playlists = updatedPlaylists;

      dispatch(receiveUser(currentUser));
      return dispatch(removePlaylist(playlist))
    });
  }
};

export const updatePlaylist = (playlist, currentUser) => {
  return (dispatch) => {
    return PlaylistApiUtil.updatePlaylist(playlist).then( (playlist) => {

      const oldPlaylist = currentUser.playlists.find( (pl) =>  pl.id === playlist.id);
      oldPlaylist.name = playlist.name;
      dispatch(receiveUser(currentUser));

      return dispatch(receivePlaylist(playlist));
    });
  };
}

export const addSongToPlaylist = (songId, playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.addSongToPlaylist(songId, playlistId).then( (playlist) => {
      return dispatch(receivePlaylist(playlist));
    });
  }
};

export const removeSongFromPlaylist = (songId, playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.removeSongFromPlaylist(songId, playlistId).then( (playlist) => {
      return dispatch(receivePlaylist(playlist));
    });
  }
};

export const followPlaylist = (playlistId, currentUser) => {
  return (dispatch) => {
    return PlaylistApiUtil.followPlaylist(playlistId).then( (playlist) => {
      currentUser.followed_playlists.push(playlist);
      dispatch(receiveUser(currentUser));
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const unfollowPlaylist = (playlistId, followId, currentUser) => {
  return (dispatch) => {
    return PlaylistApiUtil.unfollowPlaylist(playlistId, followId).then( (playlist) => {

      const updatedPlaylists = []
      currentUser.followed_playlists.forEach((userFollowedPlaylist) => {
        if (userFollowedPlaylist.id !== playlist.id) {
          updatedPlaylists.push(userFollowedPlaylist)
        }
      })

      currentUser.followed_playlists = updatedPlaylists;

      dispatch(receiveUser(currentUser));
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists: playlists
  };
}

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

export const receivePlaylist = (playlist) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist: playlist
  };
}

export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const removePlaylist = (playlist) => {
  return {
    type: REMOVE_PLAYLIST,
    playlist: playlist
  };
}
