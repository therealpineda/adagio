import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

const defaultState = {}

const PlaylistReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, oldState, action.playlists)
    case RECEIVE_PLAYLIST:
      newState = merge({}, oldState);
      newState[action.playlist.id] = action.playlist
      return newState;
    case REMOVE_PLAYLIST:
      newState = merge({}, oldState);
      delete newState[action.playlist.id];
      return newState;
    default:
      return oldState;
  }
};

export default PlaylistReducer;
