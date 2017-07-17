import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TouchableHighlight } from 'react-native';

export default class NavMenu extends Component{
  render(){
  return(
    <View style={styles.bottombar}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.goFeed}>
        <Image style={styles.img} source={require('./Images/basics/png/menu.png')}/>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.goAddEvent}>
        <Image style={styles.img} source={require('./Images/basics/png/add.png')}/>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.goHome}>
        <Image style={styles.img} source={require('./Images/camping/png/tent.png')}/>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.goSearch}>
        <Image style={styles.img} source={require('./Images/basics/png/search.png')}/>
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
    height: 45,
    width: '100%',
    backgroundColor: 'rgba(250, 250, 250, 0.72)',
    alignSelf: 'flex-end',
    justifyContent: 'space-around'
  },
  img : {
    marginTop: 5,
    marginBottom: 5,
    width: 32,
    height: 'auto',
    flex: 1,
  },
})
