import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = {
  songs: [],
  albums: [],
  playlists: [],
  users: [],
};

const SearchReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const songs = action.results.songs;
      const albums = action.results.albums;
      const playlists = action.results.playlists;
      const users = action.results.users;
      newState.songs = songs;
      newState.albums = albums;
      newState.playlists = playlists;
      newState.users = users;
      return newState;
    default:
      return oldState;
  }
};

export default SearchReducer;
