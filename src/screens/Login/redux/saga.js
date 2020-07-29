import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { set, get, remove } from '../../../utils/storage';
import { clientPost, clientGet } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';

import {
  LOGIN_SCREEN_LOGIN,
  LOGIN_SCREEN_LOGOUT,
  LOGIN_SCREEN_AUTO_LOGIN
} from './actionTypes';

import {
  loginResult
} from './actions';

function* loginRequest({ payload }) {
  const { phone } = payload;
  try {
    let user = {};
    if (phone === "3137022267") {
      user = {token: 'snqYjWosG8JBbEIlcPxraEUNAdjjphSlj2tkCHbaIv_LUoFqTN-VfBKvw1L2ZlXXIHTP33o2Ep4q9t8laRK9lJuoYirnfB37RGwJkYD7JDMYxEC2CV5KAB6ME6sVX3Yx'};
      yield call(set, "token", user.token);
    } 

    yield put(loginResult(user));
    navigate('mainFlow');
  } catch(e) {
    console.log('loginRequest : ', error);
    yield put(loginResult(null));
  }
}

function* logout() {
  try {
    yield call(remove, "token");
    navigate('loginFlow');
  } catch(e) {
    console.log('logout : ', error);
  }
}

function* autoLogin() {
  try {
    const token = yield call(get, "token");
    if (token) {
      yield put(loginResult({ token }));
      navigate('mainFlow');
    } else {
      navigate('loginFlow');
    }
  } catch(e) {
    console.log('autoLogin : ', error);
  }
}

export function* watchLoginRequest() {
  yield takeEvery(LOGIN_SCREEN_LOGIN, loginRequest);
}

export function* watchLogout() {
  yield takeEvery(LOGIN_SCREEN_LOGOUT, logout);
}

export function* watchAutoLogin() {
  yield takeEvery(LOGIN_SCREEN_AUTO_LOGIN, autoLogin);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginRequest),
    fork(watchLogout),
    fork(watchAutoLogin)
  ]);
}