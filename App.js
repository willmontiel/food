import React from 'react';
import { Provider } from 'react-redux';
//Store
import { configureStore } from './src/redux/store';
//Navigator
import Navigator from './src/Navigator';

export default () => {
  return (
    <Provider store={configureStore()}>
      <Navigator />
    </Provider>
  )
}