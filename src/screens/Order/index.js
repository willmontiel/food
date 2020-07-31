import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const OrderDetailScreen = () => {
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>
        Orders
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default OrderDetailScreen;