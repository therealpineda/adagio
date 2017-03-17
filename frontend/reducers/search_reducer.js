import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = { albums: [], users: [] };

const SearchReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const albums = action.results.albums;
      const users = action.results.users;
      newState.albums = albums;
      newState.users = users;
      return newState;
    default:
      return oldState;
  }
};

export default SearchReducer;
