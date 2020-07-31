import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { mainStyles, colors } from '../../constants/styles';

const OrdersScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mis Órdenes</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles
});

export default OrdersScreen;