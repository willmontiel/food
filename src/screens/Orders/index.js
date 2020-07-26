import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const OrdersScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>
        Orders
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default OrdersScreen;