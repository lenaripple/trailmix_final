import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';
import {Api} from '../Constants/api'

import AddEvent from './AddEvent';
import Login from './Login';
import NavMenu from './NavMenu';
import Home from './Home';
import Search from './Search';
import EventPage from './EventPage';
import EventsList from './EventsList';

const api = new Api()

export default class Feed extends React.Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToFeed = this.goToFeed.bind(this)
    this.goToAddEvent = this.goToAddEvent.bind(this)
  }

  static defaultProps = {
    api
  }
  state = {
    loading: false,
    posts: []
  }

  async componentDidMount(){
    this.setState({loading: true})
    const posts = await this.props.api.fetchPosts()
    this.setState({loading: false, posts})
    console.log('state line 36',this.state);
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
  goToEventPage(){
    this.props.navigator.push({
      component: EventPage,
      title: "Trip Page"
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <EventsList posts={this.state.posts} />

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
    paddingBottom: 40
  },
  list: {
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    color: '#FBFBFB',
    marginBottom: 2,
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
    right: 5,
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
    right: 5,
    backgroundColor: 'rgba(87, 41, 84, 0.72)',
    justifyContent: "center",
  },
});
