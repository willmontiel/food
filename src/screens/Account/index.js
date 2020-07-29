import React from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { mainStyles } from '../../constants/styles';
import { logout } from '../Login/redux/actions';

const AccountScreen = ({ logout }) => {
  return (
    <>
      <View style={{ ...styles.container, marginTop: 20 }}>
        <Text>Mi Cuenta</Text>

        <TouchableOpacity
          onPress={logout}
        >
          <Text>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};


const styles = StyleSheet.create({
  ...mainStyles
});

const mapStateToProps = ({ authRedux }) => {
  const { user } = authRedux;
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  {
    logout
  }
)(AccountScreen);