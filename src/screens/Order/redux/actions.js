import {
  ORDERS_SCREEN_GET_ORDER,
  ORDERS_SCREEN_GET_ORDER_RESULT
} from './actionTypes';

export const getOrder = (params) => ({
  type: ORDERS_SCREEN_GET_ORDER,
  payload: params
});

export const getOrderResult = (result) => ({
  type: ORDERS_SCREEN_GET_ORDER_RESULT,
  payload: { result }
});