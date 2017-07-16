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
        <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.list}>
          <Image
            style={styles.background}
            resizeMode="cover"
            source={require('./Images/climb.jpg')}>
            <View style={styles.overlay}>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.title}>Morning climbing</Text>
                <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/rope.png')}/>
              </View>
              <Text style={styles.host}>mat</Text>
              <Text style={styles.date}>Thursday, July 27</Text>
              <Text style={styles.location}>Boulder Canyon</Text>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.summary}>Going to Eater Rock - 11s and 12s</Text>
                <TouchableHighlight
                  style={styles.btn}>
                  <Text style={styles.btnText}>Join</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Image>
        </View>

          <View style={styles.list}>
            <Image
              style={styles.background}
              resizeMode="cover"
              source={require('./Images/hiking.jpg')}>
              <View style={styles.overlay}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.title}>long day hike</Text>
                  <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/boot.png')}/>
                </View>
                <Text style={styles.host}>thebob</Text>
                <Text style={styles.date}>Saturday, August 12</Text>
                <Text style={styles.location}>Indian Peaks Wilderness</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.summary}>Pawnee Pass - it should be melted</Text>
                  <TouchableHighlight
                    style={styles.btn}>
                    <Text style={styles.btnText}>Join</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Image>
          </View>

          <View style={styles.list}>
            <Image
              style={styles.background}
              resizeMode="cover"
              source={require('./Images/backpack.jpg')}>
              <View style={styles.overlay}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.title}>Sleeping outside</Text>
                  <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/backpack.png')}/>
                </View>
                <Text style={styles.host}>lena</Text>
                <Text style={styles.date}>Thursday, July 27-Saturday, August 5</Text>
                <Text style={styles.location}>Glacier National Park, MT</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.summary}>Long trip in the park with bears</Text>
                  <TouchableHighlight
                    style={styles.btn}>
                    <Text style={styles.btnText}>Join</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Image>
          </View>

          <View style={styles.list}>
            <Image
              style={styles.background}
              resizeMode="cover"
              source={require('./Images/climb.jpg')}>
              <View style={styles.overlay}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.title}>send fest</Text>
                  <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/rope.png')}/>
                </View>
                <Text style={styles.host}>jimmy</Text>
                <Text style={styles.date}>Satuday, August 26-Monday, August 28</Text>
                <Text style={styles.location}>Ten Sleep, WY</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.summary}>Getting up to WY to crush some routes!</Text>
                  <TouchableHighlight
                    style={styles.btn}>
                    <Text style={styles.btnText}>Join</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Image>
          </View>

          <View style={styles.list}>
            <Image
              style={styles.background}
              resizeMode="cover"
              source={require('./Images/camp.jpg')}>
              <View style={styles.overlay}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.title}>birthday trip</Text>
                  <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/bonfire.png')}/>
                </View>
                <Text style={styles.host}>ali</Text>
                <Text style={styles.date}>August?</Text>
                <Text style={styles.location}>Nederland</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.summary}>Let$#36;s go camping for my birthday!</Text>
                  <TouchableHighlight
                    style={styles.btn}>
                    <Text style={styles.btnText}>Join</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Image>
          </View>

        </ScrollView>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  container: {
    backgroundColor: '#7DA46D',
    paddingBottom: 50
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
