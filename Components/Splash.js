import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS } from 'react-native';

import Login from './Login'

export default class Splash extends React.Component {
  goToLogin(){
    this.props.navigator.push({
      component: Login
    })
  }

  render() {
    return (
      <Image source={require('./Images/login-background.jpg')} >
        <Text style={styles.header}>trailMix</Text>
        <Text style={styles.text}>Find friends for every adventure</Text>
        <Button
          title="Get Started"
          style={styles.button}
          onPress={()=> this.goToLogin()} />
    </Image>
    );
  }
}
const styles = StyleSheet.create({
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
  Splash: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: undefined,
    height: undefined
  },
  button: {
    height: 10,
    width: 100
  },
});
