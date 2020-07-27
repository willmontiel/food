import React from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, Button } from 'react-native';
//Custom
import { mainStyles } from '../../constants/styles';

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
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles
});

const mapStateToProps = () => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {
  }
)(HomeScreen);