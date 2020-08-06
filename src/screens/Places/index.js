import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

//Custom
import { mainStyles, colors } from '../../constants/styles';
import { SearchBar } from 'react-native-elements';
import ImageAction from '../../components/ImageAction';
import Card, { Body } from '../../components/Card';

import {
  searchPlaces
} from './redux/actions'

const PlacesScreen = ({ route, searchPlaces, places, loading, navigation }) => {
  const [searchText, setSearchText] = useState("");

  const { category } = route.params;
  useEffect(() => {
    if (category) {
      searchPlaces({ categories: category })
    }
  }, [category])

  const categories = [
    { id: "hotdogs", name: "Fritanga", source: require('../../assets/images/empanadas.png')},
    { id: "chicken_wings", name: "Pollo", source: require('../../assets/images/chicken.png') },
    { id: "meats", name: "Carne", source: require('../../assets/images/roast-beef.png')},
    { id: "hotdogs", name: "Comida rápida", source: require('../../assets/images/burguer.png')},
    { id: "driedfruit", name: "Saludable", source: require('../../assets/images/healthy.png')},
    { id: "chocolate", name: "Postres", source: require('../../assets/images/ice-cream.png')},
    { id: "driedfruit", name: "Jugos", source: require('../../assets/images/juice.png')},
  ]
  
  return (
    <>
      <View style={{ flex: 1, paddingVertical: 20, backgroundColor: colors.white }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <IconButton
            icon="arrow-left"
            onPress={() => navigation.navigate('Home')}
            color={colors.orange}
          />

          <View style={{ flex: 1 }}>
            <SearchBar
              placeholder="Buscar..."
              lightTheme
              onChangeText={(text) => {
                setSearchText(text);
                if (text.length > 3) {
                  searchPlaces({ searchText: text })
                }
              }}
              inputContainerStyle={{ backgroundColor: colors.liteGrey, borderRadius: 5 }}
              containerStyle={{ backgroundColor: colors.white, borderTopWidth: 0, borderBottomWidth: 0 }}
              value={searchText}
              showLoading={loading}
            />
          </View>

          <IconButton
            icon="filter"
            onPress={() => console.log('Pressed')}
            animated={true}
            color={colors.orange}
          />
        </View>

        <View style={styles.categories}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              return (
                <ImageAction
                  onPress={() => searchPlaces({ categories: item.id })}
                  source={item.source}
                  size="sm"
                  title={item.name}
                />
              )
            }}
          />
        </View>
        
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Place', { id: item.id })}>
                  <Card>
                    <Body
                      image={<Image source={{ uri: item.image_url }} style={styles.image} />}
                      imagePosition="left"
                    >
                      <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                        <View style={styles.nameContainer}>
                          <View style={{ flex: 1, flexDirection: "column", paddingRight: 10 }}>
                            <View style={{ flexWrap: 'wrap' }}>
                              <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                            </View>

                            <View style={{ flexWrap: 'wrap' }}>
                              <Text numberOfLines={2} style={styles.category}>
                                {item.categories
                                  ?
                                  item.categories.map((category) => {
                                    return `${category.title} `
                                  })
                                  :
                                  null}
                              </Text>
                            </View>
                          </View>

                          <View>
                            <Text style={styles.rating}>
                              <FontAwesome name="star" size={14} style={{ padding: 0}} />  {item.rating && item.rating.toFixed(1)}
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                          <Text style={{color: colors.darkGrey}}>{Math.floor(item.distance)} km</Text>

                          <IconButton
                            icon="heart"
                            onPress={() => console.log('Pressed')}
                            animated={true}
                            size={18}
                            color={colors.red}
                            style={{padding: 0, margin: 0}}
                          />
                        </View>
                      </View>
                    </Body>
                  </Card>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </>
  )
}

PlacesScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  ...mainStyles,
  categories: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 14,
    marginBottom: 10,
    backgroundColor: colors.liteGrey
  },
  placeContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderRadius: 5
  },
  image: {
    borderRadius: 5,
    width: 100,
    height: 100
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5
  },
  categoryContainer: {
    flexDirection: "row"
  },
  category: {
    marginRight: 5,
    fontSize: 12
  },
  rating: {
    fontSize: 14,
    marginVertical: 5
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