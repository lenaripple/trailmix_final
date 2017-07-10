import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <Image source={require('./Images/login-background.jpg')} style={styles.mainContainer}>
        <Text style={styles.header}>trailMix</Text>
        <Text style={styles.text}>Find friends for every adventure</Text>
    </Image>
    );
  }
}
const styles = StyleSheet.create({
  lightGreen: {
    color: '#418964',
  },
  darkGreen: {
    color: '#0F483B'
  },
  medBlue: {
    color: '#319898',
  },
  baseGray: {
    color: '#d8d8d8'
  },
  baseWhite: {
    color: '#ffffea'
  },
  orange: {
    color: '#FDC250'
  },
  yellow:{
    color:'#F6DE53'
  },
  header: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FBFBFB'
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FBFBFB',
    marginBottom: 5,
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    color:'#334d4d',
    fontSize: 18
  },
  mainContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: '#FBFBFB',
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 18,
    color: '#114D03',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    marginBottom: 5,
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
