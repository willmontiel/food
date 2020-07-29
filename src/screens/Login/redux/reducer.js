import {
  LOGIN_SCREEN_LOGIN,
  LOGIN_SCREEN_LOGIN_RESULT,
  LOGIN_SCREEN_LOGOUT
} from './actionTypes';

const INIT_STATE = {
  user: null,
  loginLoading: false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SCREEN_LOGIN:
      return { ...state, loginLoading: true };

    case LOGIN_SCREEN_LOGIN_RESULT:
      return { ...state, user: action.payload.result, loginLoading: false };

    case LOGIN_SCREEN_LOGOUT:
      return { ...state, user: null };

    default:
      return { ...state };
  }
};