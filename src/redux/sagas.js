import { all } from 'redux-saga/effects';

import loginSagas from '../screens/Login/redux/saga';
import placesSagas from '../screens/Places/redux/saga';
import placeSagas from '../screens/Place/redux/saga';

export default function* rootSaga() {
  yield all([
    loginSagas(),
    placesSagas(),
    placeSagas()
  ]);
}