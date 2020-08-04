import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { set, get, remove } from '../../../utils/storage';
import { clientPost, clientGET } from '../../../utils/restHelper';
import { navigate } from '../../../navigationRef';
import { showAlert } from '../../../redux/common/actions';

import {
  PLACE_SCREEN_GET_PLACE
} from './actionTypes';

import {
  getPlaceResult
} from './actions';

function* getPlaceRequest({ payload }) {
  const { id } = payload;
  try {
    let response = yield call(
      clientGET,
      id,
      {}
    );
    
    /*
    let response = {
      "id": "jw7wkWmTX04fRYLcp9vlPQ",
      "alias": "falafels-drive-in-san-jose",
      "name": "Falafel's Drive-In",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/tUkHArroX8_frD9qOoOhvg/o.jpg",
      "is_claimed": true,
      "is_closed": false,
      "url": "https://www.yelp.com/biz/falafels-drive-in-san-jose?adjust_creative=yBlN32qjWd0LS95YssAjHg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=yBlN32qjWd0LS95YssAjHg",
      "phone": "+14082947886",
      "display_phone": "(408) 294-7886",
      "review_count": 4408,
      "categories": [
        {
          "alias": "mideastern",
          "title": "Middle Eastern"
        },
        {
          "alias": "falafel",
          "title": "Falafel"
        },
        {
          "alias": "hotdogs",
          "title": "Fast Food"
        }
      ],
      "rating": 4.0,
      "price": "$",
      "transactions": [
        "delivery",
        "pickup"
      ]
    };
    */

    response.products = [
      {
        id: 1,
        name: "Pollo asado",
        imageUrl: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
        price: 18000,
        description: "Pollo asado completo, papa cocida, maduro y arepa, Pollo asado completo, papa cocida, maduro y arepa, Pollo asado completo, papa cocida, maduro y arepa"
      },
      {
        id: 2,
        name: "Empanadas x 7",
        imageUrl: "https://www.goya.com/media/6693/argentinean-style-beef-empanadas-new.jpg?quality=80",
        price: 6000,
        description: "Empanadas de carne o pollo con ají"
      },
      {
        id: 3,
        name: "Papa Aborrajada x 5",
        imageUrl: "https://1.bp.blogspot.com/-JYof8vcPvJM/VdTibG5BIxI/AAAAAAAAAtI/lKYv1cs4v48/s1600/papa%2Baborrajada.jpg",
        price: 4500,
        description: "Papa aborrajada freca con guacamole"
      },
      {
        id: 4,
        name: "Lechona",
        imageUrl: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/137423/6226266bf23a1e98cd37aa401c52bfbca97efa28.XL2.jpg",
        price: 10000,
        description: "Lechona con cuero crocante + gaseosa 1.5"
      }
    ]

    yield put(getPlaceResult(response));
  } catch (e) {
    console.log('getPlaceResult : ', e);
    yield put(getPlaceResult(null));
    yield put(showAlert({ title: "Error", message: e.data.error.description, cancelText: "Aceptar" }));
  }
}

export function* watchGetPlaceRequest() {
  yield takeEvery(PLACE_SCREEN_GET_PLACE, getPlaceRequest);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetPlaceRequest)
  ]);
}