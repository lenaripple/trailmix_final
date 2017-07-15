import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput } from 'react-native';

import AddEvent from './AddEvent';
import Feed from './Feed';
import NavMenu from './NavMenu';
import Search from './Search';

export default class Home extends React.Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToFeed = this.goToFeed.bind(this)
    this.goToAddEvent = this.goToAddEvent.bind(this)
  }

  goToFeed(){
    this.props.navigator.push({
      component: Feed,
      navigationBarHidden: true,
      title:"Events"
    })
  }
  goToHome(){
    this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
      title: "Profile"
    })
  }
  goToSearch(){
    this.props.navigator.push({
      component: Search,
      navigationBarHidden: true,
      title: "Search"
    })
  }
  goToAddEvent(){
    this.props.navigator.push({
      component: AddEvent,
      title: "Create an Event"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
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
