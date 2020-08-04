import React from 'react';
import { connect } from 'react-redux';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Screens
import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';
import AccountScreen from './screens/Account';
import HomeScreen from './screens/Home';
import OrdersScreen from './screens/Orders';
import OrderScreen from './screens/Order';
import PlacesScreen from './screens/Places';
import PlaceScreen from './screens/Place';
//Custom 
import { setNavigator } from './navigationRef';
import Alert from './components/Alert';
import { colors } from './constants/styles';

const AuthStack = createStackNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Places" component={PlacesScreen} />
      <HomeStack.Screen name="Place" component={PlaceScreen} />
    </HomeStack.Navigator>
  );
}

const OrdersStack = createStackNavigator();
function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator headerMode="none">
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderScreen} />
    </OrdersStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Navigator = (props) => {
  const { user } = props;

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={(navigator) => { setNavigator(navigator) }}>
        {(user && user.token) ? (
          <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
              activeTintColor: colors.orange,
            }}
          >
            <Tab.Screen
              name="HomeStack"
              component={HomeStackScreen}
              options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="OrdersStack"
              component={OrdersStackScreen}
              options={{
                tabBarLabel: 'Órdenes',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="list" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Account"
              component={AccountScreen}
              options={{
                tabBarLabel: 'Cuenta',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
            <AuthStack.Navigator headerMode="none" >
              <AuthStack.Screen name="Splash" component={SplashScreen} />
              <AuthStack.Screen name="Login" component={LoginScreen} />
            </AuthStack.Navigator>
          )}
      </NavigationContainer>
      <Alert />
    </SafeAreaProvider>
  );
}

const mapStateToProps = ({ authRedux }) => {
  const { user } = authRedux;
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  {

  }
)(Navigator);