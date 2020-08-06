import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { clientPost, clientGET } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';
import { showAlert } from '../../../redux/common/actions';

import {
  ORDERS_SCREEN_GET_ORDERS
} from './actionTypes';

import {
  getOrdersResult
} from './actions';

function* getOrdersRequest({ payload }) {
  try {
    let response = [
      {
        id: 1,
        place: {
          id: 1,
          name: "Fritanga Doña Mary",
          imageUrl: "https://www.santanderalextremo.com/wp-content/uploads/2019/05/fritanga-giron.jpg"
        },
        date: "2020-08-05 14:00:00",
        products: [{
          id: 1,
          name: 'Empanadas x 6',
          price: 4500,
          cant: 1
        }],
        status: "Entregado",
        total: 4500
      },
      {
        id: 2,
        place: {
          id: 1,
          name: "Panadería Tahona",
          imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf"
        },
        date: "2020-08-04 08:00:00",
        products: [
          {
            id: 3,
            name: 'Buñuelos x 6',
            price: 2500,
            cant: 2
          },
          {
            id: 3,
            name: 'Buñuelos x 6',
            price: 2500,
            cant: 2
          }
        ],
        status: "Entregado",
        total: 5000
      }
    ]

    yield put(getOrdersResult(response));
  } catch (e) {
    console.log('getOrdersRequest : ', e);
    yield put(getOrdersResult([]));
    yield put(showAlert({ title: "Error", message: e.data.error.description, cancelText: "Aceptar" }));
  }
}

export function* watchGetOrdersRequest() {
  yield takeEvery(ORDERS_SCREEN_GET_ORDERS, getOrdersRequest);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetOrdersRequest)
  ]);
}