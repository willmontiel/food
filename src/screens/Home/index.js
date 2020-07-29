import React from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, Button } from 'react-native';
//Custom
import { mainStyles } from '../../constants/styles';

//Actions
import {
  showAlert
} from '../../redux/common/actions';

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <Button
          title="Restaurantes"
          onPress={() => {
            navigation.navigate('Places', {});
          }}
        />

        <Button
          title="Show alert"
          onPress={() => {
            showAlert({
              title: "Hola",
              message: "Hola",
              cancelText: "Nada"
            });
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles
});

const mapStateToProps = ({ authRedux }) => {
  const { user } = authRedux;

  console.log("User", user)
  return {
  }
}

export default connect(
  mapStateToProps,
  {
    showAlert
  }
)(HomeScreen);