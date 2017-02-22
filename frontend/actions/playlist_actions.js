import * as PlaylistApiUtil from '../util/playlist_api_util';

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

export const addPlaylist = (playlist) => {
  return (dispatch) => {
    return PlaylistApiUtil.addPlaylist(playlist).then( (playlist) => {
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const deletePlaylist = (id) => {
  return (dispatch) => {
    return PlaylistApiUtil.deletePlaylist(id).then ( (playlist) => {
        return dispatch(removePlaylist(playlist))
    });
  }
};

export const updatePlaylist = (playlist) => {
  return (dispatch) => {
    return PlaylistApiUtil.updatePlaylist(playlist).then( (playlist) => {
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

export const followPlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.followPlaylist(playlistId).then( (playlist) => {
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const unfollowPlaylist = (playlistId, followId) => {
  return (dispatch) => {
    return PlaylistApiUtil.unfollowPlaylist(playlistId, followId).then( (playlist) => {
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
