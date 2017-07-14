import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput } from 'react-native';

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
      navigationBarHidden: true
    })
  }
  goToHome(){
    this.props.navigator.push({
      component: Home,
      navigationBarHidden: true
    })
  }
  goToSearch(){
    this.props.navigator.push({
      component: Search,
      navigationBarHidden: true
    })
  }
  goToAddEvent(){
    this.props.navigator.push({
      component: AddEvent
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>EventFeed Here</Text>
          <Button
          title="Add an Event"
          color="#FCF9FC"
          onPress={()=>this.goToAddEvent()} />
        </ScrollView>
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
    color: '#FCF9FC'
  }
});
