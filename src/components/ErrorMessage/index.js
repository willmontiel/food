import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/styles';

const messages = {
  "required": "Este campo es obligatorio",
  "maxLength": "Maximo 20 caracteres"
};

const ErrorMessage = ({ errors, field }) => {
  /*
   "phone": Object {      
    "message": "",       
    "ref": Object {      
      "focus": undefined,
      "name": "phone",   
    },
    "type": "required",  
  },
  */

  return (
    <>
      {
        errors[field]
        &&
        <View style={styles.container}>
          <Text style={styles.message}>
            {errors[field].message ? errors[field].message : messages[errors[field].type]}
          </Text>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: colors.red,
    borderRadius: 5,
    marginTop: 5
  },
  message: {
    color: colors.white,
    fontSize: 16
  }
});

export default ErrorMessage;