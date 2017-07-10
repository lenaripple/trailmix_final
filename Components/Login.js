import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput } from 'react-native';
import Splash from './Splash';
import Feed from './Feed';
import SignUp from './SignUp';

export default class LogIn extends React.Component {
  goToFeed(){
    this.props.navigator.push({
      component: Feed
    })
  }
  goToSignUp(){
    this.props.navigator.push({
      component: SignUp
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Splash />
        <View style={styles.Login}>
          <TextInput
            placeholder="username"
            style={styles.input} />
          <Button
          title="Log In"
          onPress={()=>this.goToFeed()} />
        </View>
        <View style={styles.signup}>
          <Button
            title="Create a New Account"
            style={styles.button}
            onPress={()=> this.goToSignUp()} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Login: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  input : {
    height: 40,
    width: '100%',
    textAlign: 'center',
    color: '#5CE6D6',
    marginTop: 15
  },
  button: {
    height: 10,
    width: 100
  },
  newAccount: {
    height: 100,
    width: 500
  },
  newAccountButton: {
    width: 100,
    height: 100
  }
});
