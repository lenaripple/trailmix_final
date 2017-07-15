import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';

import Feed from './Feed';
import Login from './Login';

export default class SignUp extends React.Component {
  goToFeed(){
    this.props.navigator.push({
      component: Feed,
      title: "Events"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Login}>
          <TextInput
            placeholder="Email"
            style={styles.input} />
          <TextInput
            placeholder="First Name"
            style={styles.input} />
          <TextInput
            placeholder="Last Name"
            style={styles.input} />
          <TextInput
            placeholder="Username"
            style={styles.input} />
            <TextInput
              placeholder="password"
              style={styles.input} />
          <TouchableHighlight
            style={styles.btn}
            underlayColor="white"
            onPress={()=>this.goToFeed()}>
            <Text style={styles.btnText}>Log In</Text>
           </TouchableHighlight>
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
  btnText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  btn: {
    margin: 20,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(250, 250, 250, 0.72)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
