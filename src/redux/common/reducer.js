import {
  COMMON_SHOW_ALERT
} from './actionTypes';

const INIT_STATE = {
  alert: null
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COMMON_SHOW_ALERT:
      return { ...state, alert: !action.payload ? null : action.payload }

    default:
      return { ...state };
  }
};