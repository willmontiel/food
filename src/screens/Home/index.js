import React from 'react';
import { connect } from 'react-redux';

import { View, TouchableOpacity, Text, Image, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//Custom
import { mainStyles, colors } from '../../constants/styles';

//Actions
import {
  showAlert
} from '../../redux/common/actions';
import { color } from 'react-native-reanimated';

const HomeScreen = ({ showAlert, navigation, user }) => {
  console.log("user", user);
  return (
    <>
      <View style={styles.container}>
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

        </View>

        <View style={styles.placesContainer}>
          <View style={styles.place}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Places', {});
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
                navigation.navigate('Places', {});
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  placesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  place: {
    marginRight: 10
  },
  imagePlaceContainer: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 2,
    borderRadius: 5
  },
  imagePlace: {
    width: 100,
    height: 100
  },
  titlePlace: {
    alignSelf: 'center',
    fontSize: 15
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