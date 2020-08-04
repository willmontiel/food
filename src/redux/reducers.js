import { combineReducers } from 'redux';

import commonRedux from './common/reducer';

import authRedux from '../screens/Login/redux/reducer';
import placesRedux from '../screens/Places/redux/reducer';
import placeRedux from '../screens/Place/redux/reducer';


const reducers = combineReducers({ commonRedux, authRedux, placesRedux, placeRedux });
export default reducers;