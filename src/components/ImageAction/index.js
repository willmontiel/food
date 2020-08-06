import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
//Custom
import { mainStyles, colors } from '../../constants/styles';

const ImageAction = (props) => {
  let imageSize = styles.imageMedium;
  if (props.size === 'xs') {
    imageSize = styles.imageExtraSmall
  } else if (props.size === 'sm') {
    imageSize = styles.imageSmall
  } else if (props.size === 'md') {
    imageSize = styles.imageMedium
  } else if (props.size === 'lg') {
    imageSize = styles.imageLarge
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (props.onPress) {
            props.onPress();
          }
        }}
      >
        <View style={styles.imagePlaceContainer}>
          <Image style={{...imageSize, ...styles.image}} source={props.source} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
  container: {
    marginRight: 10
  },
  imagePlaceContainer: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5
  },
  imageExtraSmall: {
    width: 35,
    height: 35
  },
  imageSmall: {
    width: 50,
    height: 50
  },
  imageMedium: {
    width: 70,
    height: 70,
    
  },
  imageLarge: {
    width: 90,
    height: 90
  },
  image: {
    borderRadius: 5
  },
  title: {
    alignSelf: 'center',
    fontSize: 12
  }
});

export default ImageAction;