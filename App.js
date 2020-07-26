import React from 'react';
import { Provider } from 'react-redux';
//Navigation
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';
//Screens
import LoginScreen from './src/screens/Login';
import AccountScreen from './src/screens/Account';
import HomeScreen from './src/screens/Home';
import OrdersScreen from './src/screens/Orders';
import OrderDetailScreen from './src/screens/OrderDetail';
import PlacesScreen from './src/screens/Places';
import PlaceDetailScreen from './src/screens/PlaceDetail';
//Store
import { configureStore } from './src/redux/store';
//Custom Navigator
import { setNavigator } from './src/navigationRef';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const homeFlow = createStackNavigator({
  Home: HomeScreen,
  Places: PlacesScreen,
  PlaceDetail: PlaceDetailScreen
});

homeFlow.navigationOptions = {
  title: 'Home',
  tabBarIcon: <FontAwesome name="home" size={20} />
}

const ordersFlow = createStackNavigator({
  Orders: OrdersScreen,
  OrderDetail: OrderDetailScreen
});

ordersFlow.navigationOptions = {
  title: 'Orders',
  tabBarIcon: <FontAwesome name="list" size={20} />
}


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    homeFlow,
    ordersFlow,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={configureStore()}>
      <SafeAreaProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </SafeAreaProvider>
    </Provider>
  )
}