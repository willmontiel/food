import {
  ORDERS_SCREEN_GET_ORDER,
  ORDERS_SCREEN_GET_ORDER_RESULT
} from './actionTypes';

const INIT_STATE = {
  order: null,
  orderLoading: false
}

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case ORDERS_SCREEN_GET_ORDER:
      return { ...state, order: null, orderLoading: true }

    case ORDERS_SCREEN_GET_ORDER_RESULT:
      return { ...state, order: action.payload.result, orderLoading: false }

    default:
      return { ...state };
  }
};