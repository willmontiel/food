import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { useForm, Controller } from "react-hook-form";

//Custom
import Row from '../../components/Row';
import ErrorMessage from '../../components/ErrorMessage';
import { mainStyles } from '../../constants/styles';

import {
  login
} from './redux/actions'

const LoginScreen = ({ login,  loading }) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    login(data);
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/login-background1.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.coverContent}>
          <View style={styles.formContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />
            <Row>
              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Escribe tu número"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    value={value}
                  />
                )}
                name="phone"
                rules={{ required: true, maxLength: 20 }}
                defaultValue="3137022267"
              />
              <ErrorMessage errors={errors} field="phone"/>
            </Row>

            <Button
              buttonStyle={styles.buttonOrange}
              titleStyle={styles.buttonTitleOrange}
              disabled={loading}
              title="Recibir código por SMS"
              onPress={handleSubmit(onSubmit)}
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
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  coverContent: {
    padding: 10,
    flexDirection: "column"
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
    padding: 20
  },
  logo: {
    width: 150,
    height: 60,
    alignSelf: 'center',
    margin: 10
  },
  ...mainStyles
});

const mapStateToProps = ({ authRedux }) => {
  const { loginLoading } = authRedux;
  return {
    loading: loginLoading
  }
}

export default connect(
  mapStateToProps,
  {
    login
  }
)(LoginScreen);