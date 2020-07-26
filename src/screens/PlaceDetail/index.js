import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const PlaceDetailScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>
        Place
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default PlaceDetailScreen;