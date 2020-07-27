import React, { useState } from 'react';
import { connect } from 'react-redux';

import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
//Custom
import { mainStyles } from '../../constants/styles';
import SearchBar from '../../components/SearchBar';

import {
  searchPlaces
} from './redux/actions'

const PlacesScreen = ({ searchPlaces, places, loading }) => {
  const [searchText, setSearchText] = useState("");

  console.log("loading", loading);
  console.log("places", places);

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChange={setSearchText}
        onSubmit={() => {
          searchPlaces({ searchText })
        }}
      />

      <ScrollView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                <View style={styles.container}>
                  <Image
                    source={{ uri: item.image_url }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.detail}>
                    {item.rating} Starts, {item.review_count} Reviews
                    </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
  image: {
    borderRadius: 5,
    width: 250,
    height: 180
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14
  },
  detail: {

  }
});

const mapStateToProps = (store) => {
  const { placesRedux } = store;
  const { places, placesLoading } = placesRedux;
  return {
    places: places,
    loading: placesLoading
  }
}

export default connect(
  mapStateToProps,
  {
    searchPlaces
  }
)(PlacesScreen);