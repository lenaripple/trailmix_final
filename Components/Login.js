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
        <View style={styles.Login}>
          <TextInput
            placeholder="username"
            style={styles.input} />
          <TextInput
            placeholder="password"
            style={styles.input} />
          <Button
          title="Log In"
          color="#FCF9FC"
          onPress={()=>this.goToFeed()} />
        </View>
        <View style={styles.signup}>
          <Button
            title="Create a New Account"
            color="#FCF9FC"
            style={styles.button}
            onPress={()=> this.goToSignUp()} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#7DA46D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Login: {
    width: '100%',
    alignItems: 'center',
  },
  input : {
    height: 40,
    width: '100%',
    textAlign: 'center',
    color: '#5CE6D6',
    marginTop: 10
  },
  signup: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
