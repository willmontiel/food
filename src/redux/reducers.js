import { combineReducers } from 'redux';

import commonRedux from './common/reducer';

import authRedux from '../screens/Login/redux/reducer';
import placesRedux from '../screens/Places/redux/reducer';
import placeRedux from '../screens/Place/redux/reducer';
import ordersRedux from '../screens/Orders/redux/reducer';
import orderRedux from '../screens/Order/redux/reducer';


const reducers = combineReducers({ commonRedux, authRedux, placesRedux, placeRedux, ordersRedux, orderRedux });
export default reducers;