import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState["currentUser"] = action.user.username;
      return  newState;
    case RECEIVE_ERRORS:
      newState.errors.push(JSON.parse(action.errors.responseText).source);
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
