import { combineReducers } from 'redux';

import login from '../screens/Login/redux/reducer';

const reducers = combineReducers({ login });
export default reducers;