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
          color="#FCF9FC"
          onPress={()=>this.goToFeed()} />
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
  }
});
