import {
  LOGIN_SCREEN_LOGIN,
  LOGIN_SCREEN_LOGIN_RESULT,
  LOGIN_SCREEN_LOGOUT,
  LOGIN_SCREEN_AUTO_LOGIN
} from './actionTypes';

export const login = (params) => ({
  type: LOGIN_SCREEN_LOGIN,
  payload: params
});

export const loginResult = (result) => ({
  type: LOGIN_SCREEN_LOGIN_RESULT,
  payload: { result }
});

export const logout = () => ({
  type: LOGIN_SCREEN_LOGOUT,
  payload: {}
});

export const autoLogin = () => ({
  type: LOGIN_SCREEN_AUTO_LOGIN,
  payload: {}
});