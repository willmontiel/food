import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  View, 
  Text, 
  ImageBackground, 
  Image, 
  StyleSheet, 
  ActivityIndicator, 
  FlatList,
  TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
//Custom
import { mainStyles, colors } from '../../constants/styles';

import {
  getPlace
} from './redux/actions'

const PlaceScreen = ({ route, getPlace, place, loading, navigation }) => {
  const { id } = route.params;
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (id) {
      getPlace({ id });
    }
  }, [id])

  return (
    <>
      {
        loading
        &&
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
          <ActivityIndicator style={{ alignSelf: "center" }} />
        </View>
      }

      {
        (place && !loading)
        &&
        <View style={{ ...styles.container, padding: 0 }}>
          <View style={styles.bannerContainer}>
            <ImageBackground
              source={{ uri: place.image_url }}
              style={styles.placeImage}
            >
              <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <IconButton
                  icon="arrow-left"
                  color={colors.black}
                  style={{ backgroundColor: colors.white }}
                  size={25}
                  onPress={() => navigation.navigate('Places')}
                />

                <View style={{ flexDirection: 'row' }}>
                  <IconButton
                    icon="share"
                    color={colors.black}
                    style={{ backgroundColor: colors.white }}
                    onPress={() => navigation.navigate('Places')}
                  />

                  <IconButton
                    icon="heart"
                    color={colors.black}
                    style={{ backgroundColor: colors.white }}
                    onPress={() => navigation.navigate('Places')}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{ padding: 20, backgroundColor: colors.white }}>
            <View style={{ alignItems: "flex-start" }}>
              <Text style={styles.title} >
                {place.name}
              </Text>
            </View>

            <View style={styles.descriptionContainer}>
              <View>
                <Text style={styles.rating}>
                  <FontAwesome name="star" size={14} />  {place.rating}
                </Text>
              </View>

              <View>
                <Text style={styles.rating}>
                  <FontAwesome name="comment" size={14} />  {place.review_count}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
              <View style={{ flex: 1 }}>
                <SearchBar
                  placeholder="Buscar..."
                  lightTheme
                  onChangeText={(text) => {

                  }}
                  inputContainerStyle={{ backgroundColor: colors.grey, borderRadius: 5 }}
                  containerStyle={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0, paddingLeft: 0, paddingBottom: 0 }}
                  value={searchText}
                  showLoading={false}
                />
              </View>

              <IconButton
                icon="filter"
                onPress={() => console.log('Pressed')}
                animated={true}
              />
            </View>
          </View>

          <View style={styles.productsContainer}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={place.products}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => {

                  }}>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                      </View>
                      <View>
                        <Image
                          source={{ uri: item.imageUrl }}
                          style={{ width: 60, height: 60, borderRadius: 5 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
  title: {
    fontSize: 20,
    color: colors.black,
    paddingBottom: 5,
  },
  bannerContainer: {
    width: '100%',
    height: 130
  },
  placeImage: {
    width: '100%',
    height: '100%'
  },
  descriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5
  },
  rating: {
    fontSize: 14
  },
  productsContainer: {

  }
});

const mapStateToProps = ({ placeRedux }) => {
  const { place, placeLoading } = placeRedux;
  return {
    place: place,
    loading: placeLoading
  }
}

export default connect(
  mapStateToProps,
  {
    getPlace
  }
)(PlaceScreen);