import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, StyleSheet } from 'react-native';

//Custom
import Row from '../../components/Row';
import ErrorMessage from '../../components/ErrorMessage';
import { mainStyles, colors } from '../../constants/styles';
import { showAlert } from '../../redux/common/actions';

import {
  autoLogin
} from '../Login/redux/actions';

const SplashScreen = ({ navigation, user, autoLogin, showAlert, loading }) => {

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/logo_transparent2.png')}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange
  },
  logo: {
    width: 250,
    height: 200,
    alignSelf: 'center',
    margin: 10
  }
});

const mapStateToProps = () => {
  return {

  }
}

export default connect(
  mapStateToProps,
  {
    autoLogin
  }
)(SplashScreen);