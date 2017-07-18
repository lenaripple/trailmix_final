import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';

import AddEvent from './AddEvent';
import Login from './Login';
import NavMenu from './NavMenu';
import Home from './Home';
import Search from './Search';


export default class EventPage extends React.Component {
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
      title: "Events"
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
      title: "Search Events"
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
      <Image
        source={require('./Images/hiking.jpg')} style={styles.Splash}>
      <ScrollView style={styles.overlay}>
        <View style={styles.profile}>
          <Text style={{fontSize: 24, justifyContent: "center", color: '#FBFBFB'}}>
          Epic Mountain Day</Text>
        </View>
          <View style={styles.body}>
            <View style={styles.list}>
                <Text style={styles.date}>07/22/2017</Text>
                <Text style={styles.location}>Indian Peaks Wilderness</Text>
                // <Text style={styles.location}>Ward, CO</Text>
                <Text style={styles.extra}>Description:</Text>
                <Text style={styles.extraText}>Let&#39;s do stuff in the sunshine</Text>
                <Text style={styles.extra}>Extra information:</Text>
                <Text style={styles.extraText}>Bring: sunscreen, water, warm layer.
                Needs: carpooling plan</Text>
              </View>

          </View>
          <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <View>
            <TouchableHighlight
              style={styles.btn}>
              <Text style={styles.btnText}>Edit Trip</Text>
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight
              style={styles.btn}>
              <Text style={styles.btnText}>Delete Trip</Text>
            </TouchableHighlight>
            </View>
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
    height: '100%',
    paddingBottom:45
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.35)',
    height: '100%',
    width: '100%',
  },
  profile:{
    marginLeft: 10,
    marginRight: 10,
    marginTop:64,
    height: 80,
    justifyContent:"center",
    alignItems: "center",
  },
  list: {
    marginBottom: 5,
    height: 80,
    padding:10
  },
  title:{
    fontSize: 16,
    fontWeight: "bold",
  },
  host:{
    fontSize:14,
  },
  date:{
    fontSize:14,
    color: '#FBFBFB',
    marginBottom: 5,
  },
  location:{
    fontSize:14,
    marginBottom: 5,
    color: '#FBFBFB',
    fontWeight: "bold",
  },
  extra:{
    fontWeight: "bold",
    fontSize:14,
    marginBottom: 5,
    color: '#FBFBFB'
  },
  extraText:{
    fontSize:12,
    marginBottom: 5,
    color: '#FBFBFB'
  },
  btnText: {
    fontSize: 18,
    color: '#FBFBFB'
  },
  btn: {
    alignItems: "center",
    width: 150,
    padding: 10,
    marginTop:275,
    backgroundColor: 'rgba(126, 165, 111, 0.63)',
  },
});
