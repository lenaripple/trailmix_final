import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, ScrollView, TouchableHighlight} from 'react-native';

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
              Upcoming Events:
            </Text>
          </View>

          <View style={styles.body}>
            <Text style={{margin:10, fontSize:16, color: '#FBFBFB'}}>
              Events you hosted:
            </Text>
            <View style={styles.list}>
                <Text style={styles.title}>Sleeping outside</Text>
                <Text style={styles.date}>Friday, June 9-Saturday, June 17</Text>
                <Text style={styles.location}>Glacier National Park, MT</Text>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={{margin: 10, fontSize:16, color: '#FBFBFB'}}>
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
    marginLeft: 10,
    marginRight: 10,
    marginTop:64,
    height: 80,
    justifyContent:"center",
    alignItems: "center",
    },
  list: {
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    color: '#FBFBFB',
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
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(87, 41, 84, 0.72)',
    justifyContent: "center",
  },
});
