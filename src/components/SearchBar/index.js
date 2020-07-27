import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = (props) => {
  const { searchText, onChange, onSubmit } = props;

  return (
    <View style={styles.background}>
      <FontAwesome 
        name="search" 
        style={styles.icon} 
      />

      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={searchText}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    color: 'black',
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 8
  }
});

export default SearchBar;