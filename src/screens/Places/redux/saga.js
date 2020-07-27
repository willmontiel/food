import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { set, get, remove } from '../../../utils/storage';
import { clientPost, clientGET } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';

import {
  PLACES_SCREEN_SEARCH
} from './actionTypes';

import {
  searchPlacesResult
} from './actions';

function* searchPlacesRequest({ payload }) {
  const { searchText } = payload;
  try {
    const response = yield call(
      clientGET,
      "search",
      {
        limit: 50,
        term: searchText,
        location: 'san jose'
      }
    );

    yield put(searchPlacesResult(response.businesses));
  } catch (e) {
    console.log('searchPlacesRequest : ', e);
    yield put(searchPlacesResult([]));
  }
}

export function* watchSearchPlacesRequest() {
  yield takeEvery(PLACES_SCREEN_SEARCH, searchPlacesRequest);
}

export default function* rootSaga() {
  yield all([
    fork(watchSearchPlacesRequest)
  ]);
}