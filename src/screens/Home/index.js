import React from 'react';
import { connect } from 'react-redux';

import { View, TouchableOpacity, Text, Image, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//Custom
import { mainStyles, colors } from '../../constants/styles';
import ImageCarousel from '../../components/ImageCarousel';
//Actions
import {
  showAlert
} from '../../redux/common/actions';
import { color } from 'react-native-reanimated';

const IMAGES = [
  "https://images.unsplash.com/photo-1490818387583-1baba5e638af",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1506354666786-959d6d497f1a",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55"
];

const HomeScreen = ({ showAlert, navigation, user }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ paddingHorizontal: 20, paddingTop: 20, fontSize: 24 }}>{user && user.name}</Text>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => {

            }}
          >
            <Text style={{ marginRight: 10 }}>{user && user.mainAddress}</Text>
            <FontAwesome name="arrow-circle-o-down" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {

            }}
          >
            <FontAwesome name="bell" size={18} />
          </TouchableOpacity>
        </View>

        <View>
          <ImageCarousel
            images={IMAGES}
          />
        </View>

        <View style={styles.placesContainer}>
          <View style={styles.place}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Places', {category: 'hotdogs'});
              }}
            >
              <View style={styles.imagePlaceContainer}>
                <Image style={styles.imagePlace} source={require('../../assets/images/restaurants.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.titlePlace}>Restaurantes</Text>
          </View>

          <View style={styles.place}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Places', {category: 'chocolate'});
              }}
            >
              <View style={styles.imagePlaceContainer}>
                <Image style={styles.imagePlace} source={require('../../assets/images/stores.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.titlePlace}>Tiendas</Text>
          </View>

        </View>

      </View>
    </>
  )
};

HomeScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  ...mainStyles,
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  placesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  place: {
    marginRight: 10
  },
  imagePlaceContainer: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderRadius: 5
  },
  imagePlace: {
    width: 70,
    height: 70,
    borderRadius: 5
  },
  titlePlace: {
    alignSelf: 'center',
    fontSize: 12
  }
});

const mapStateToProps = ({ authRedux }) => {
  const { user } = authRedux;
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  {
    showAlert
  }
)(HomeScreen);