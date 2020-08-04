import { all, call, fork, put, takeEvery, delay } from 'redux-saga/effects';
import { set, get, remove } from '../../../utils/storage';
import { clientPost, clientGet } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';
import { showAlert } from '../../../redux/common/actions';

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
      user = {
        name: "William",
        lastname: "Montiel",
        indicative: '57',
        phone: "3137022267",
        email: "will.montiel@aol.com",
        token: 'snqYjWosG8JBbEIlcPxraEUNAdjjphSlj2tkCHbaIv_LUoFqTN-VfBKvw1L2ZlXXIHTP33o2Ep4q9t8laRK9lJuoYirnfB37RGwJkYD7JDMYxEC2CV5KAB6ME6sVX3Yx',
        mainAddress: "Calle 17 # 33 - 58",
        addresses: [
          {id: 1, name: "Calle 17 # 33 - 58", city: "Cali"},
          {id: 2, name: "Dg 23 # 18B - 40", city: "Cali"},
          {id: 2, name: "Cra 33 # 34A - 65", city: "Palmira"}
        ]
      };
      yield call(set, "token", user.token);
      yield put(loginResult(user));
    } else {
      yield put(loginResult({ error: true, message: "Usuario o contraseña incorrecta", data: "" }));
    }
  } catch (e) {
    console.log('loginRequest : ', e);
    yield put(loginResult(null));
    yield put(showAlert({ title: "Error", message: e, cancelText: "Aceptar" }));
  }
}

function* logout() {
  try {
    yield call(remove, "token");
    yield put(loginResult(null));
  } catch (e) {
    console.log('logout : ', e);
  }
}

function* autoLogin() {
  try {
    yield delay(3000);
    const token = yield call(get, "token");
    if (token) {
      yield put(loginResult({
        name: "William",
        lastname: "Montiel",
        indicative: '57',
        phone: "3137022267",
        email: "will.montiel@aol.com",
        token: token,
        mainAddress: "Calle 17 # 33 - 58",
        addresses: [
          {id: 1, name: "Calle 17 # 33 - 58", city: "Cali"},
          {id: 2, name: "Dg 23 # 18B - 40", city: "Cali"},
          {id: 2, name: "Cra 33 # 34A - 65", city: "Palmira"}
        ]
      }));
    } else {
      yield put(loginResult(null));
      navigate('Login');
    }
  } catch (e) {
    console.log('autoLogin : ', e);
    yield put(loginResult(null));
    yield put(showAlert({ title: "Error", message: e, cancelText: "Aceptar" }));
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