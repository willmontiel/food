import { combineReducers } from 'redux';

import loginRedux from '../screens/Login/redux/reducer';
import placesRedux from '../screens/Places/redux/reducer';

const reducers = combineReducers({ loginRedux, placesRedux });
export default reducers;