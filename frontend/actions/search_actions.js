import * as ApiSearchUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results,
  };
};

export const searchDatabase = (query) => {
  return (dispatch) => {
    return ApiSearchUtil.searchDatabase(query).then((results) => {
      return dispatch(receiveSearchResults(results));
    });
  };
};
