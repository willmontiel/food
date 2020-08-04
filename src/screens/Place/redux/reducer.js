import {
  PLACE_SCREEN_GET_PLACE,
  PLACE_SCREEN_GET_PLACE_RESULT
} from './actionTypes';

const INIT_STATE = {
  place: [],
  placeLoading: false
}

export default (state = INIT_STATE, action) => {
  
  switch (action.type) {
    case PLACE_SCREEN_GET_PLACE:
      return { ...state, place: null, placeLoading: true }

    case PLACE_SCREEN_GET_PLACE_RESULT:
      return { ...state, place: action.payload.result, placeLoading: false }

    default:
      return { ...state };
  }
};