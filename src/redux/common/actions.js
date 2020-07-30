import {
  COMMON_SHOW_ALERT
} from './actionTypes';

export const showAlert = (params) => ({
  type: COMMON_SHOW_ALERT,
  payload: params
});