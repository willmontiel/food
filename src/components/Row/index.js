import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children }) => {
  return (
    <View style={styles.row}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default Row;