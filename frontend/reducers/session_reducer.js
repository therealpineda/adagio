import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  currentUser: { username: null },
  errors: []
};

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState["currentUser"] = action.user;
      return  newState;
    case RECEIVE_ERRORS:
      newState.errors = [];
      const errors = JSON.parse(action.errors.responseText);
      const errorFields = Object.keys(errors);
      errorFields.forEach( (errorField) => {
        errors[errorField].forEach((error) => {
          let message = errorField + ' ' + error;
          newState.errors.push(message);
        });
      });
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
