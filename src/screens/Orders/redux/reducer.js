import {
  ORDERS_SCREEN_GET_ORDERS,
  ORDERS_SCREEN_GET_ORDERS_RESULT
} from './actionTypes';

const INIT_STATE = {
  orders: [],
  ordersLoading: false
}

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case ORDERS_SCREEN_GET_ORDERS:
      return { ...state, orders: [], ordersLoading: true }

    case ORDERS_SCREEN_GET_ORDERS_RESULT:
      return { ...state, orders: action.payload.result, ordersLoading: false }

    default:
      return { ...state };
  }
};