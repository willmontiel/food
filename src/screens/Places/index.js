import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const PlacesScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>
        Places
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default PlacesScreen;