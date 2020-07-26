import {
  LOGIN_SCREEN_LOGIN,
  LOGIN_SCREEN_LOGIN_RESULT
} from './actionTypes';

const INIT_STATE = {
  loginResponse: null,
  loginLoading: false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SCREEN_LOGIN:
      return { ...state, loginLoading: true }

    case LOGIN_SCREEN_LOGIN_RESULT:
      return { ...state, loginResponse: action.payload.result, loginLoading: false }

    default:
      return { ...state };
  }
};