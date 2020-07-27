import { StyleSheet } from 'react-native';

export const colors = {
  orange: '#FA9441',
  white: '#FFFFFF',
  black: '#000000',
  red: '#F73423'
}

//Buttons
const buttons = {
  buttonOrange: {
    height: 50,
    backgroundColor: colors.orange,
    borderRadius: 5
  },
  buttonTitleOrange: {
    fontSize: 18
  }
}

//Inputs
const inputs = {
  input: {
    fontSize: 18,
    backgroundColor: colors.white,
    height: 50,
    padding: 10,
    borderRadius: 5
  },
}

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  ...inputs,
  ...buttons
});