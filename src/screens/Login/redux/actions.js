import {
  LOGIN_SCREEN_LOGIN,
  LOGIN_SCREEN_LOGIN_RESULT
} from './actionTypes';

export const login = (params) => ({
  type: LOGIN_SCREEN_LOGIN,
  payload: params
});

export const loginResult = (result) => ({
  type: LOGIN_SCREEN_LOGIN_RESULT,
  payload: { result }
});