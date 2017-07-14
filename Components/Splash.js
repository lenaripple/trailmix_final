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
      <View>
        <Image
         source={require('./Images/login-background.jpg')} style={styles.Splash}>
          <Text style={styles.header}>trailMix</Text>
          <Text style={styles.text}>Find friends for every adventure</Text>
          <Button
            title="Get Started"
            color="#FCF9FC"
            style={styles.button}
            onPress={()=> this.goToLogin()} />
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#FBFBFB',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: '#FBFBFB'
  },
  Splash: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: undefined,
    height: undefined,
    opacity: .7
  },
  // button: {
  //   // height: 40,
  //   // flexDirection: 'row',
  //   backgroundColor: 'white',
  //   borderColor: 'white',
  //   marginBottom: 5,
  //   marginTop: 20,
  //   padding: 20,
  //   alignSelf: 'center',
  //   // justifyContent: 'center',
  //   fontSize: 18,
  //   color: '#114D03',
  //   alignSelf: 'center',
  //   fontWeight: 'bold'
  // }
});
