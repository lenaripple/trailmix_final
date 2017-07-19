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
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('./Images/trailmix_logo2.png')}/>
          <TouchableHighlight
            style={styles.btn}
            onPress={()=> this.goToLogin()}
            underlayColor="transparent">
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
  logo:{
    width: '50%',
    height:'40%'
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
    backgroundColor: 'rgba(0,0,0,.55)',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#11540A',
    alignSelf: 'center',
  },
  btn: {
    margin:29,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
