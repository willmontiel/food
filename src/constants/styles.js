import { StyleSheet } from 'react-native';

export const colors = {
  orange: '#FA9441',
  white: '#FFFFFF',
  black: '#000000',
  red: '#F73423',
  grey: 'rgba(0,0,0,0.1)',
  darkGrey: '#A0AAB2',
  brown: '#5E3023',
  green: '#809848',
  secondaryText: 'rgba(0,0,0,0.7)',
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
    padding: 20,
    marginTop: 20,
    backgroundColor: colors.white
  },
  rowContainer: {
    flexDirection: "row"
  },
  columnContainer: {
    flexDirection: "column"
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24
  },
  divider: {
    backgroundColor: colors.orange
  },
  ...inputs,
  ...buttons
});