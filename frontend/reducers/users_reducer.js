import { RECEIVE_USERS } from '../actions/users_actions';
import { merge } from 'lodash';

const defaultState = {};

const UsersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_USERS:
      newState = merge({}, oldState, action.users)
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
