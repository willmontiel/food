import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { set, get, remove } from '../../../utils/storage';
import { clientPost, clientGet } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';

import {
  LOGIN_SCREEN_LOGIN
} from './actionTypes';

import {
  loginResult
} from './actions';

function* loginRequest({ payload }) {
  console.log("payload", payload);
  try {
    navigate('mainFlow');
  } catch(e) {
    console.log('loginRequest : ', error)
    yield put(loginResult(null));
  }
}

export function* watchLoginRequest() {
  yield takeEvery(LOGIN_SCREEN_LOGIN, loginRequest);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginRequest)
  ]);
}