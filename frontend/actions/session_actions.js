export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as SessionApiUtil from '../util/session_api_util';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
}

export const receiveErrors = (errors) => {
  return {
      type: RECEIVE_ERRORS,
      errors,
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then(
      (user) => { return dispatch(receiveCurrentUser(user)); },
      (errors) => { return dispatch(receiveErrors(errors)); }
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then(
      (user) => { return dispatch(receiveCurrentUser(user));},
      (errors) => { return dispatch(receiveErrors(errors));}
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then( (user) => {
      return dispatch(receiveCurrentUser({
        username: null, id: null
      })); }
    );
  };
};
