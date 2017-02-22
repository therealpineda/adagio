import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  currentUser: { username: null, id: null },
  errors: []
};

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState["currentUser"] = action.user;
      newState.errors = [];
      return  newState;
    case RECEIVE_ERRORS:
      newState.errors = [];
      if (!Array.isArray(action.errors)) {
      const errors = JSON.parse(action.errors.responseText);
      const errorFields = Object.keys(errors);
      errorFields.forEach( (errorField) => {
        errors[errorField].forEach((error) => {
          newState.errors.push(error);
        });
      });
      }
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
