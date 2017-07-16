import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';

import AddEvent from './AddEvent';
import Login from './Login';
import NavMenu from './NavMenu';
import Home from './Home';
import Search from './Search';


export default class Feed extends React.Component {
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
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.list}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>Weekend trip to the mountains</Text>
              <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/backpack.png')}/>
            </View>
            <Text style={styles.host}>jimmy</Text>
            <Text style={styles.date}>Saturday, July 22</Text>
            <Text style={styles.location}>Brainard Lake, CO</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.summary}>About 10 miles each way, fairly strenuous</Text>
              <TouchableHighlight
                style={styles.btn}>
                <Text style={styles.btnText}>Join</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.list}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>Climbing - morning</Text>
              <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/rope.png')}/>
            </View>
            <Text style={styles.host}>mat</Text>
            <Text style={styles.date}>Sunday, July 23</Text>
            <Text style={styles.location}>Boulder Canyon</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.summary}>Hoping to get on some 10s and 11s</Text>
              <TouchableHighlight
                style={styles.btn}>
                <Text style={styles.btnText}>Join</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.list}>
            <Image
              style={styles.background}
              resizeMode="cover"
              source={require('./Images/hiking.jpg')}>
              <View style={styles.overlay}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.title}>hiking!</Text>
                  <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/boot.png')}/>
                </View>
                <Text style={styles.host}>lena</Text>
                <Text style={styles.date}>Thursday, July 27</Text>
                <Text style={styles.location}>Boulder, CO</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.summary}>Hoping to do Bear Peak/South Boulder Peak</Text>
                  <TouchableHighlight
                    style={styles.btn}>
                    <Text style={styles.btnText}>Join</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Image>
          </View>
          <View style={styles.list}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>Chill lil overnight</Text>
              <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/bonfire.png')}/>
            </View>
            <Text style={styles.host}>dana</Text>
            <Text style={styles.date}>Saturday, August 12-Sunday, August 13</Text>
            <Text style={styles.location}>Secret spot</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.summary}>Camping, smores, ghost stories</Text>
              <TouchableHighlight
                style={styles.btn}>
                <Text style={styles.btnText}>Join</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.list}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>Escape the heat!</Text>
              <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/rope.png')}/>
            </View>
            <Text style={styles.host}>alex</Text>
            <Text style={styles.date}>Saturday, August 12</Text>
            <Text style={styles.location}>Ten Sleep, WY</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.summary}>Climbing is better when it&#39;s not 100 degrees</Text>
              <TouchableHighlight
                style={styles.btn}>
                <Text style={styles.btnText}>Join</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.list}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>Day hike</Text>
              <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/boot.png')}/>
            </View>
            <Text style={styles.host}>thebob</Text>
            <Text style={styles.date}>Saturday, July 22</Text>
            <Text style={styles.location}>Indian Peaks Wilderness</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.summary}>Pawnee Pass - it&#39;s tough!</Text>
              <TouchableHighlight
                style={styles.btn}>
                <Text style={styles.btnText}>Join</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.list}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>Birthday bash</Text>
              <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/bonfire.png')}/>
            </View>
            <Text style={styles.host}>ali</Text>
            <Text style={styles.date}>Saturday, August 26</Text>
            <Text style={styles.location}>Telluride, CO</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.summary}>Beer, camping, via ferrata</Text>
              <TouchableHighlight
                style={styles.btn}>
                <Text style={styles.btnText}>Join</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  container: {
    flex:1,
    backgroundColor: '#7DA46D',
  },
  list: {
    backgroundColor: 'rgba(250, 250, 250, 0.72)',
    color: '#FBFBFB',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop:5,
    height: 150,
  },
  title:{
    paddingLeft:5,
    marginTop: 50,
    fontSize: 18
  },
  host:{
    paddingLeft:5,
    fontSize:10,
  },
  date:{
    paddingLeft:5,
    fontSize:16
  },
  img:{
    position: "absolute",
    top: 50,
    right: 0,
    width: 40,
    height: 40,
  },
  background:{
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
    margin:0
  },
  overlay:{
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    height: '100%',
    width: '100%'
  },
  location:{
    paddingLeft:5,
    fontSize:14,
    marginBottom: 5
  },
  summary:{
    paddingLeft:5,
    fontSize: 12,
  },
  btnText: {
    fontSize: 18,
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
