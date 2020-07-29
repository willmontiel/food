import { combineReducers } from 'redux';

import authRedux from '../screens/Login/redux/reducer';
import placesRedux from '../screens/Places/redux/reducer';
import commonRedux from './common/reducer';

const reducers = combineReducers({ authRedux, placesRedux, commonRedux });
export default reducers;