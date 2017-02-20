import * as UsersApiUtil from '../util/users_api_util';

export const fetchUsers = () => {
  return (dispatch) => {
    return UsersApiUtil.fetchUsers().then( (users) => {
      return dispatch(receiveUsers(users));
    })
  };
};

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  };
};
