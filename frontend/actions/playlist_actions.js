import * as PlaylistApiUtil from '../util/playlist_api_util';

export const fetchPlaylists = (userId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylists(userId).then( (playlists) => {
      return dispatch(receivePlaylists(playlists));
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
