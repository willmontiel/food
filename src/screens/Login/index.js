import React, { useState } from 'react';
import { connect } from 'react-redux';

import { View, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import {
  login
} from './redux/actions'

const LoginScreen = () => {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/login-background1.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />

            <TextInput
              style={styles.input}
              placeholder="Escribe tu número"
              value={phone}
              onChangeText={setPhone}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Button
              buttonStyle={styles.button}
              title="Recibir código por SMS"
              onPress={() => { }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

LoginScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    padding: 10,
    flexDirection: "column"
  },
  formContainer: {
    backgroundColor: 'rgba(256, 256, 256, .5)',
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
    padding: 20
  },
  logo: {
    width: 180,
    height: 70,
    alignSelf: 'center',
    margin: 10
  },
  input: {
    fontSize: 20,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  button: {
    height: 50,
    backgroundColor: '#FA9441'
  }
});

const mapStateToProps = ({ login }) => {
  const { loginResponse, loginLoading } = login;
  return {
    loading: loginLoading,
    response: loginResponse
  }
}

export default connect(
  mapStateToProps,
  {
    login
  }
)(LoginScreen);