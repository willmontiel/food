import { all } from 'redux-saga/effects';

import loginSagas from '../screens/Login/redux/saga';
import placesSagas from '../screens/Places/redux/saga';
import placeSagas from '../screens/Place/redux/saga';
import ordersSagas from '../screens/Orders/redux/saga';
import orderSagas from '../screens/Order/redux/saga';

export default function* rootSaga() {
  yield all([
    loginSagas(),
    placesSagas(),
    placeSagas(),
    ordersSagas(),
    orderSagas()
  ]);
}