import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

const defaultState = {}

const PlaylistReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge(newState, action.playlists)
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist
      return newState;
    default:
      return oldState;
  }
};

export default PlaylistReducer;
