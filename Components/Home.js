import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput} from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.img} resizeMode="contain" source={require('./Images/basics/png/profile.png')}/>
          <Text>Hi Lena!</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.list}>
            Events you hosted:
          </Text>
          <Text style={styles.list}>
            Events you attended:
          </Text>
        </View>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7DA46D',
  },
  profile:{
    marginTop:64,
    height: 250,
    justifyContent:"center",
    alignItems: "center",
    },
  img:{
    height: 100,
    marginBottom: 20
  },
  list: {
    height: 120,
    backgroundColor: 'transparent',
    position: 'relative',
  }
});
