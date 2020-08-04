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
import { mainStyles } from '../../constants/styles';
import { SearchBar } from 'react-native-elements';

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
    { id: "hotdogs", name: "Fritanga", imageUrl: "https://www.santanderalextremo.com/wp-content/uploads/2019/05/fritanga-giron.jpg" },
    { id: "chicken_wings", name: "Pollo", imageUrl: "https://www.hola.com/imagenes/cocina/recetas/20190729146642/pollo-asado-al-horno-con-tomillo/0-705-707/pollo-asado-horno-tomillo-m.jpg" },
    { id: "meats", name: "Carne", imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf" },
    { id: "hotdogs", name: "Comida rápida", imageUrl: "https://www.ecestaticos.com/image/clipping/7616cc0f10fe4cdf992130720ce3e7fe/las-039-fast-food-039-mas-caloricas-que-deberias-evitar.jpg" },
    { id: "meats", name: "Parrilla", imageUrl: "https://elcomercio.pe/resizer/wgzOLm1y_15dAEQNdS9RkyAQwcI=/980x528/smart/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VL6AJK4OYVG2VPMJNXGI5PE6RM.jpeg" },
    { id: "driedfruit", name: "Saludable", imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf" },
    { id: "chocolate", name: "Postres", imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf" },
    { id: "popcorn", name: "Sanduches", imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf" },
    { id: "driedfruit", name: "Jugos", imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf" },
  ]
  return (
    <>
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <IconButton
            icon="arrow-left"
            onPress={() => navigation.navigate('Home')}
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
              inputContainerStyle={{ backgroundColor: 'white', borderRadius: 5 }}
              containerStyle={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
              value={searchText}
              showLoading={loading}
            />
          </View>

          <IconButton
            icon="filter"
            onPress={() => console.log('Pressed')}
            animated={true}
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
                <TouchableOpacity onPress={() => {
                  searchPlaces({ categories: item.id })
                }}>
                  <View style={{ marginRight: 15 }}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={{ width: 60, height: 60, borderRadius: 5 }}
                    />
                    <Text style={{ fontSize: 12, flexWrap: 'wrap', alignSelf: 'center' }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
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
                  <View style={styles.placeContainer}>
                    <Image
                      source={{ uri: item.image_url }}
                      style={styles.image}
                    />

                    <View style={{ ...styles.columnContainer, ...styles.spaceBetween, flex: 1 }}>
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
                            <FontAwesome name="star" size={14} />  {item.rating && item.rating.toFixed(1)}
                          </Text>
                        </View>
                      </View>

                      <View style={{ ...styles.rowContainer, ...styles.spaceBetween, marginVertical: 5, marginRight: 8 }}>
                        <Text>{Math.floor(item.distance)} km</Text>
                        <FontAwesome name="heart" size={14} />
                      </View>
                    </View>
                  </View>
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
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'white'
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
    height: 100,
    marginRight: 15
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