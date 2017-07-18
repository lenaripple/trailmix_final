import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';

const EventsList = ({posts})=> (
  <Image source={require('./Images/login-background.jpg')} style={styles.Splash}>
    <ScrollView>
      {posts.map((post, i) => (
        <View key={i} style={styles.list}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>{post._title}</Text>
            <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/rope.png')}/>
          </View>
            <Text style={styles.host}>Host: {post.user.username}</Text>
            <Text style={styles.date}>{post.date.slice(5,7)}/{post.date.slice(8,10)}/{post.date.slice(0,4)}</Text>
            <Text style={styles.location}>{post.location}</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.summary}>{post.description}</Text>
            <TouchableHighlight
              style={styles.btn}
              // onPress={this.props.goEventPage}
              >
              <Text style={styles.btnText}>Join</Text>
            </TouchableHighlight>
          </View>
        </View>
      ))}
    </ScrollView>
  </Image>
);

const styles = StyleSheet.create({
  Splash: {
    width: undefined,
    height: undefined,
    flex:1,
    paddingBottom: 45
  },
  list: {
    marginBottom: 4,
    height: 150,
    backgroundColor: 'rgba(250,250,250,.6)',
  },
  title:{
    paddingLeft:5,
    marginTop: 40,
    fontSize: 18
  },
  host:{
    paddingLeft:5,
    fontSize:12,
  },
  date:{
    paddingLeft:5,
    fontSize:14
  },
  img:{
    position: "absolute",
    top: 50,
    right: 5,
    width: 40,
    height: 40,
  },
  // background:{
  //   flex: 1,
  //   alignSelf: 'stretch',
  //   height: undefined,
  //   width: undefined,
  //   margin:0
  // },
  // overlay:{
  //   backgroundColor: 'rgba(0,0,0,.5)',
  //   height: '100%',
  //   width: '100%'
  // },
  location:{
    paddingLeft:5,
    fontSize:14,
    marginBottom: 5
  },
  summary:{
    paddingLeft:5,
    fontSize: 14,
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

export default EventsList;
