import {
  PLACE_SCREEN_GET_PLACE,
  PLACE_SCREEN_GET_PLACE_RESULT
} from './actionTypes';

export const getPlace = (params) => ({
  type: PLACE_SCREEN_GET_PLACE,
  payload: params
});

export const getPlaceResult = (result) => ({
  type: PLACE_SCREEN_GET_PLACE_RESULT,
  payload: { result }
});