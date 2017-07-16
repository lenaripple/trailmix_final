import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';

const EventsList = ({posts})=> (
  <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((post, i) => (
        <View key={i} style={styles.list}>
          <View style={styles.list}>
            <Image
              style={styles.background}
              resizeMode="cover"
              source={require('./Images/climb.jpg')}>
              <View style={styles.overlay}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.title}>{post._title}</Text>
                  <Image resizeMode="contain" style={styles.img} source={require('./Images/camping/png/rope.png')}/>
                </View>
                <Text style={styles.host}>Host: {post.user.username}</Text>
                <Text style={styles.date}>{post.date}</Text>
                <Text style={styles.location}>{post.location}</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.summary}>{post.description}</Text>
                  <TouchableHighlight
                    style={styles.btn}
                    onPress={()=>this.goToEventPage()}>
                  <Text style={styles.btnText}>Join</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Image>
        </View>
      </View>
      ))}
    </ScrollView>
  </View>
);

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

export default EventsList;
