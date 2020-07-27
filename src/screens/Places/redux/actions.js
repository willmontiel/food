import {
  PLACES_SCREEN_SEARCH,
  PLACES_SCREEN_SEARCH_RESULT
} from './actionTypes';

export const searchPlaces = (params) => ({
  type: PLACES_SCREEN_SEARCH,
  payload: params
});

export const searchPlacesResult = (result) => ({
  type: PLACES_SCREEN_SEARCH_RESULT,
  payload: { result }
});