import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { useForm, Controller } from "react-hook-form";

//Custom
import Row from '../../components/Row';
import ErrorMessage from '../../components/ErrorMessage';
import { mainStyles } from '../../constants/styles';
import { showAlert } from '../../redux/common/actions';

import {
  login,
  autoLogin
} from './redux/actions'

const LoginScreen = ({ navigation, user, login, autoLogin, showAlert, loading }) => {
  const { control, handleSubmit, errors } = useForm();

  useEffect(() => {
    autoLogin();
  }, []);
  
  useEffect(() => {
    if (user && user.error) {
      if (!user.error) {
        showAlert({message: user.message, cancelText: "Aceptar"});
      }
    }
  }, [user]);

  const onSubmit = (data) => {
    login(data);
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/login-background2.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.coverContent}>
          <View style={styles.formContainer}>
            <Image
              source={require('../../assets/images/logo_transparent2.png')}
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start"
  },
  coverContent: {
    marginTop: 180,
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
    height: 100,
    alignSelf: 'center',
    margin: 10
  },
  ...mainStyles
});

const mapStateToProps = ({ authRedux }) => {
  const { user, loginLoading } = authRedux;
  return {
    loading: loginLoading,
    user
  }
}

export default connect(
  mapStateToProps,
  {
    login,
    showAlert,
    autoLogin
  }
)(LoginScreen);