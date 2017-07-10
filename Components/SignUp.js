import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput } from 'react-native';

import Feed from './Feed';
import Login from './Login';

export default class SignUp extends React.Component {
  goToFeed(){
    this.props.navigator.push({
      component: Feed
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Login}>
          <TextInput
            placeholder="username"
            style={styles.input} />
          <Button
          title="Log In"
          onPress={()=>this.goToFeed()} />
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
