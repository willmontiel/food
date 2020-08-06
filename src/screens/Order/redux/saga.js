import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { clientPost, clientGET } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';
import { showAlert } from '../../../redux/common/actions';

import {
  ORDERS_SCREEN_GET_ORDER
} from './actionTypes';

import {
  getOrderResult
} from './actions';

function* getOrderRequest({ payload }) {
  try {
    let response = {
      id: 1,
      place: {
        id: 1,
        name: "Fritanga Doña Mary",
        imageUrl: "https://www.santanderalextremo.com/wp-content/uploads/2019/05/fritanga-giron.jpg"
      },
      date: "2020-08-05 14:00:00",
      products: [
        {
          id: 1,
          name: 'Empanadas x 6',
          price: 4500,
          cant: 1
        },
        {
          id: 2,
          name: 'Empanadas x 6',
          price: 4500,
          cant: 1
        },
        {
          id: 3,
          name: 'Empanadas x 6, Empanadas x 6, Empanadas x 6, Empanadas x 6, Empanadas x 6',
          price: 4500,
          cant: 1
        }
      ],
      status: "Entregado",
      notes: "Sin cebolla por favor",
      total: 4500,
      address: {
        name: "Casa",
        address: "Dg 23 # 18B - 40",
        city: {
          id: 1,
          name: "Cali"
        }
      }
    };

    yield put(getOrderResult(response));
  } catch (e) {
    console.log('getOrderRequest : ', e);
    yield put(getOrderResult(null));
    yield put(showAlert({ title: "Error", message: e.data.error.description, cancelText: "Aceptar" }));
  }
}

export function* watchGetOrderRequest() {
  yield takeEvery(ORDERS_SCREEN_GET_ORDER, getOrderRequest);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetOrderRequest)
  ]);
}