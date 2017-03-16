import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = { albums: [] };

const SearchReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const albums = action.results.albums;
      newState.albums = albums;
      return newState;
    default:
      return oldState;
  }
};

export default SearchReducer;
