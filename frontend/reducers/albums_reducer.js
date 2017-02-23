import { RECEIVE_ALBUMS } from '../actions/album_actions';
import { merge } from 'lodash';

const defaultState = {};

const AlbumsReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUMS:
      newState = merge({}, oldState, action.albums);
      return newState;
    default:
      return oldState;
  }
};

export default AlbumsReducer;
