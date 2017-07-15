import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TouchableHighlight } from 'react-native';

import Login from './Login'

export default class Splash extends React.Component {
  goToLogin(){
    this.props.navigator.push({
      component: Login,
      title: "Log In"
    })
  }

  render() {
    return (
      <Image source={require('./Images/login-background.jpg')} style={styles.Splash}>
        <View style={styles.overlay}>
          <Text style={styles.header}>trailMix</Text>
          <Text style={styles.text}>Find friends for every adventure</Text>
          <TouchableHighlight
            style={styles.btn}
            onPress={()=> this.goToLogin()}
            underlayColor="none">
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#FBFBFB',
    fontWeight: 'bold',
    opacity: 1
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
    color: '#FBFBFB',
    opacity: 1
  },
  Splash: {
    width: undefined,
    height: undefined,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.6)',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#FBFBFB',
    alignSelf: 'center',
  },
  btn: {
    margin:29,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(126, 165, 111, 0.63)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
