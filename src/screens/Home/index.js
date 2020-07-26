import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const HomeScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>
        Home
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;