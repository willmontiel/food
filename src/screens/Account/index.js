import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>
        Account
      </Text>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};


const styles = StyleSheet.create({});

export default AccountScreen;