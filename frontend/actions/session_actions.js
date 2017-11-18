import * as APIUtil from '../util/session_api_util';

import { clearErrors, receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const ADD_ATTENDANCE = 'ADD_ATTENDANCE';
export const REMOVE_ATTENDANCE = 'REMOVE_ATTENDANCE';
export const ADD_HOSTING = 'ADD_HOSTING';
export const DELETE_HOSTING = 'DELETE_HOSTING';

export const addAttendance = (event_id, event) => ({
  type: ADD_ATTENDANCE,
  event_id,
  event
})

export const removeAttendance = (event_id) => {
  return {
    type: REMOVE_ATTENDANCE,
    event_id
  }
}

export const addHosting = (event_id, event) => {
  debugger
  return {
    type: ADD_HOSTING,
    event_id,
    event
  }
}

export const removeHosting = (event_id) => ({
  type: DELETE_HOSTING,
  event_id
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(user => {
    dispatch(clearErrors());
    return dispatch(receiveCurrentUser(user));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signin = (user) => (dispatch) => (
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

export const updateUser = (id, user) => (dispatch) => {
  return APIUtil.updateUser(id, user).then(user => {
    return dispatch(receiveCurrentUser(user))
  });
};

export const userQuickUpdate = (user, city) => (dispatch) => (
  APIUtil.userQuickUpdate(user, city).then(user => {
    dispatch(clearErrors());
    dispatch(receiveCurrentUser(user));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)
