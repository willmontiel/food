import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>
        Account
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default AccountScreen;