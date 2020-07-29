import {
  PLACES_SCREEN_SEARCH,
  PLACES_SCREEN_SEARCH_RESULT
} from './actionTypes';

const INIT_STATE = {
  places: [],
  placesLoading: false
}

export default (state = INIT_STATE, action) => {
  
  switch (action.type) {
    case PLACES_SCREEN_SEARCH:
      return { ...state, places: [], placesLoading: true }

    case PLACES_SCREEN_SEARCH_RESULT:
      return { ...state, places: action.payload.result, placesLoading: false }

    default:
      return { ...state };
  }
};