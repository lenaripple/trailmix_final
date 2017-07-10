import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Image source={require('./Images/login-background.jpg')} style={styles.mainContainer}>
          <Text style={styles.header}>trailMix</Text>
          <Text style={styles.text}>Find friends for every adventure</Text>
          <TouchableHighlight
          style={styles.button}
            onPress={() =>
              navigate('Main')
              }
            underlayColor="white">
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableHighlight>
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
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: '#FBFBFB'
  },
  text: {
    textAlign: 'center',
    color: '#FBFBFB',
    marginBottom: 5,
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    textAlign: 'center',
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
