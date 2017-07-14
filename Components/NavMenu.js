import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TouchableHighlight } from 'react-native';

export default class NavMenu extends Component{
  render(){
  return(
    <View style={styles.bottombar}>
      <TouchableHighlight onPress={this.props.goFeed}>
        <Image style={styles.img} source={require('./Images/outdoor/png/trees.png')}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.props.goAddEvent}>
        <Image style={styles.img} source={require('./Images/outdoor/png/map.png')}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.props.goHome}>
        <Image style={styles.img} source={require('./Images/270886-outdoors/png/tent-2.png')}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.props.goSearch}>
        <Image style={styles.img} source={require('./Images/outdoor/png/compass.png')}/>
      </TouchableHighlight>
    </View>
  )
}
}

const styles = StyleSheet.create({
  bottombar: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: 'darkgrey',
    alignSelf: 'flex-end',
    justifyContent: 'space-around'
  },
  img : {
    width: 60,
    height: 'auto',
    flex: 1,
    color: '#FBFBFB'
  },
})
