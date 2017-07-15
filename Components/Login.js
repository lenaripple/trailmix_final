import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import Splash from './Splash';
import Feed from './Feed';
import SignUp from './SignUp';

export default class LogIn extends React.Component {
  goToFeed(){
    this.props.navigator.push({
      component: Feed,
      title: "Events"
    })
  }
  goToSignUp(){
    this.props.navigator.push({
      component: SignUp,
      title: "Sign Up"
    })
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="on-drag"
        >
        <View style={styles.Login}>
          <TextInput
            placeholder="email"
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
        <View style={styles.signup}>
          <TouchableHighlight
            style={styles.btn}
            underlayColor="white"
            onPress={()=> this.goToSignUp()}>
            <Text style={styles.btnText}>Create a New Account</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
