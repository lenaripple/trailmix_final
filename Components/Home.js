import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, ScrollView} from 'react-native';

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
      title:"Events"
    })
  }
  goToHome(){
    this.props.navigator.push({
      component: Home,
      title: "Profile"
    })
  }
  goToSearch(){
    this.props.navigator.push({
      component: Search,
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
      <Image source={require('./Images/login-background.jpg')} style={styles.Splash}>
        <ScrollView style={styles.overlay}>
          <View style={styles.profile}>
            <Text style={{fontSize: 20,color: '#FBFBFB'}}>
            Hi Lena!</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.list}>
              Events you hosted:
            </Text>
            <Text style={styles.list}>
              Events you attended:
            </Text>
          </View>
        </ScrollView>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  Splash: {
    width: undefined,
    height: undefined,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.35)',
    height: '100%',
    width: '100%',
  },
  profile:{
    color: '#FBFBFB',
    marginLeft: 20,
    marginRight: 20,
    marginTop:64,
    height: 80,
    justifyContent:"center",
    alignItems: "center",
    },
  list: {
    backgroundColor: 'rgba(126, 165, 111, 0.3)',
    color: '#FBFBFB',
    fontSize: 16,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 120,
    position: 'relative',
  }
});
