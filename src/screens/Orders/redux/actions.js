import {
  ORDERS_SCREEN_GET_ORDERS,
  ORDERS_SCREEN_GET_ORDERS_RESULT
} from './actionTypes';

export const getOrders = (params) => ({
  type: ORDERS_SCREEN_GET_ORDERS,
  payload: params
});

export const getOrdersResult = (result) => ({
  type: ORDERS_SCREEN_GET_ORDERS_RESULT,
  payload: { result }
});