import React from 'react';
import { connect } from 'react-redux';

import { View, TouchableOpacity, Text, Image, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//Custom
import { mainStyles, colors } from '../../constants/styles';
import ImageCarousel from '../../components/ImageCarousel';
import ImageAction from '../../components/ImageAction';
//Actions
import {
  showAlert
} from '../../redux/common/actions';

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
        <View style={{ paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>{user && user.name}</Text>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <FontAwesome name="bell" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => {

            }}
          >
            <Text style={{ marginRight: 10 }}>{user && user.mainAddress}</Text>
            <FontAwesome name="arrow-circle-o-down" size={20} />
          </TouchableOpacity>
        </View>

        <View>
          <ImageCarousel
            images={IMAGES}
          />
        </View>

        <View style={styles.placesContainer}>
          <ImageAction
            onPress={() => navigation.navigate('Places', { category: 'hotdogs' })}
            source={require('../../assets/images/burguer.png')}
            size="md"
            title="Restaurantes"
          />

          <ImageAction
            onPress={() => navigation.navigate('Places', { category: 'chocolate' })}
            source={require('../../assets/images/cart.png')}
            size="md"
            title="Tiendas"
          />
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 20, color: colors.darkGrey, fontWeight: 'bold' }}>Favoritos <FontAwesome name="heart" size={20} color={colors.red} /></Text>
          </View>

          <View style={styles.favoritesContainer}>
            <ImageAction
              onPress={() => navigation.navigate('Place', { id: 'jw7wkWmTX04fRYLcp9vlPQ' })}
              source={require('../../assets/images/cart.jpg')}
              size="lg"
              title="Tiendas"
            />

            <ImageAction
              onPress={() => navigation.navigate('Place', { id: 'jw7wkWmTX04fRYLcp9vlPQ' })}
              source={require('../../assets/images/cart.jpg')}
              size="lg"
              title="Tiendas"
            />

            <ImageAction
              onPress={() => navigation.navigate('Place', { id: 'jw7wkWmTX04fRYLcp9vlPQ' })}
              source={require('../../assets/images/cart.jpg')}
              size="lg"
              title="Tiendas"
            />
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
    marginTop: 20,
    backgroundColor: colors.white
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
  },
  favoritesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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