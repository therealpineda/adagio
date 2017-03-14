import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const RECEIVE_USERS = 'RECEIVE_USERS';
const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    return UsersApiUtil.fetchUser(id).then((user) => {
      return dispatch(receiveUser(user));
    });
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    return UsersApiUtil.fetchUsers().then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
};

export const followUser = (followerId, followingId) => {
  return (dispatch) => {
    return UsersApiUtil.newUserFollow(followerId, followingId).then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
};

export const unfollowUser = (followingId, followId) => {
  return (dispatch) => {
    return UsersApiUtil.deleteUserFollow(followingId, followId).then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
};
