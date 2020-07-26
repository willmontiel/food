import { all } from 'redux-saga/effects';

import loginSagas from '../screens/Login/redux/saga';


export default function* rootSaga(getState) {
  yield all([
    loginSagas()
  ]);
}