import * as APIUtil from '../util/session_api_util';
// import * as UserApiUtil from '../util/user_util';

import { clearErrors, receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => {
    dispatch(clearErrors());
    return dispatch(receiveCurrentUser(user));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);


export const signin = user => dispatch => (
  APIUtil.signin(user).then(user => {
    dispatch(clearErrors());
    dispatch(receiveCurrentUser(user));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signout = () => dispatch => (
  APIUtil.signout(null)
    .then(() => dispatch(receiveCurrentUser(null)))
);



export const updateUserCity = (user, city_id) => dispatch => (
  APIUtil.updateUserCity(user, city_id).then(user => {
    // debugger
    dispatch(clearErrors());
    return dispatch(receiveCurrentUser(user));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(user => {
    // debugger
    dispatch(clearErrors());
    return dispatch(receiveCurrentUser(user));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
