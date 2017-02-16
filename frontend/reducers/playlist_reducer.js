import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import { merge } from 'lodash';

const defaultState = {}

const PlaylistReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge(newState, action.playlists)
    default:
      return oldState;
  }
};

export default PlaylistReducer;
