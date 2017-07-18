import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, ScrollView, TouchableHighlight} from 'react-native';

import AddEvent from './AddEvent';
import Feed from './Feed';
import NavMenu from './NavMenu';
import Search from './Search';
import EventPage from './EventPage';

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

  goToEventPage(){
    this.props.navigator.push({
      component: EventPage,
      title: "Trip Page"
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
            <Text style={{margin:10, fontSize:16, color: '#FBFBFB'}}>
              Your Events:
            </Text>
            <View style={styles.list}>
                <Text style={styles.title}>Epic Mountain Day</Text>
                <Text style={styles.date}>07/22/2017</Text>
                <Text style={styles.location}>Indian Peaks Wilderness</Text>
                <TouchableHighlight
                  style={styles.btn}
                  onPress={()=>this.goToEventPage()}
                  >
                  <Text style={styles.btnText}>View Details</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.list}>
                  <Text style={styles.title}>Post-capstone trip</Text>
                  <Text style={styles.date}>07/21/2017</Text>
                  <Text style={styles.location}>Golden, CO</Text>
                  <TouchableHighlight
                    style={styles.btn}
                    onPress={()=>this.goToEventPage()}
                    >
                    <Text style={styles.btnText}>View Details</Text>
                  </TouchableHighlight>
                </View>
            </View>

          <View style={styles.body}>
            <Text style={{margin:10, fontSize:16, color: '#FBFBFB'}}>
              Upcoming Events:
            </Text>
            <View style={styles.list}>
                <Text style={styles.title}>Epic Mountain Day</Text>
                <Text style={styles.date}>07/22/2017</Text>
                <Text style={styles.location}>Indian Peaks Wilderness</Text>
                <TouchableHighlight
                  style={styles.btn}
                  onPress={()=>this.goToEventPage()}
                  >
                  <Text style={styles.btnText}>View Details</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.list}>
                  <Text style={styles.title}>Climbing trip</Text>
                  <Text style={styles.date}>08/10/2017</Text>
                  <Text style={styles.location}>Ten Sleep, WY</Text>
                  <TouchableHighlight
                    style={styles.btn}
                    onPress={()=>this.goToEventPage()}
                    >
                    <Text style={styles.btnText}>View Details</Text>
                  </TouchableHighlight>
                </View>
          </View>

            <View style={styles.body}>
              <Text style={{margin: 10, fontSize:16, color: '#FBFBFB'}}>
                Events you attended:
              </Text>
              <View style={styles.list}>
                  <Text style={styles.title}>Morning walk</Text>
                  <Text style={styles.date}>07/18/2017</Text>
                  <Text style={styles.location}>Denver, CO</Text>
                  <TouchableHighlight
                    style={styles.btn}
                    onPress={()=>this.goToEventPage()}
                    >
                    <Text style={styles.btnText}>View Details</Text>
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
    height: undefined,
    paddingBottom:45
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.35)',
    height: '100%',
    width: '100%',
  },
  profile:{
    // color: '#FBFBFB',
    marginLeft: 10,
    marginRight: 10,
    marginTop:64,
    height: 80,
    justifyContent:"center",
    alignItems: "center",
    },
  list: {
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    // color: '#FBFBFB',
    marginBottom: 5,
    height: 80,
    padding:10
  },
  title:{
    fontSize: 16
  },
  host:{
    fontSize:10,
  },
  date:{
    fontSize:16
  },
  img:{
    position: "absolute",
    top: 20,
    right: 0,
    width: 40,
    height: 40,
  },
  location:{
    fontSize:14,
    marginBottom: 5
  },
  btnText: {
    fontSize: 16,
    color: '#FBFBFB'
  },
  btn: {
    padding: 5,
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(87, 41, 84, 0.72)',
    justifyContent: "center",
  },
});
