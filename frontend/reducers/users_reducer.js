import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { merge } from 'lodash';

const defaultState = {};

const UsersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_USERS:
      newState = merge({}, oldState);
      newState = merge(newState, action.users);
      Object.keys(action.users).forEach((userId) => {
        newState[userId].playlists = action.users[userId].playlists
        newState[userId].followings = action.users[userId].followings
      });
      return newState;
    case RECEIVE_USER:
      newState = merge({}, oldState);
      newState[action.user.id] = action.user;
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
