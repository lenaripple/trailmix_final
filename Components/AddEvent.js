import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight } from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
  } from 'react-native-form-generator';

import Feed from './Feed';
import NavMenu from './NavMenu';
import Home from './Home';
import Search from './Search';



export default class AddEvent extends React.Component {
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
      <View style={styles.container}>
        <Form
          style={styles.form}
          ref='newEventForm'
          label='Event Information'>
          <InputField style={styles.smText}
            ref="title"
            placeholder="Event Title"
          />
          <DatePickerField style={styles.smText}
            ref='date'
            minimumDate={new Date()}
            maximumDate={new Date('12/31/2018')}
            placeholder='Date'/>
          <InputField style={styles.smText}
            ref="location"
            placeholder="Location"
          />
          <PickerField style={styles.smText}
            label='Primary Activity'
            options={{
              "hiking":'Hiking',
              "backpacking": 'Backpacking',
              "climbing": 'Climbing',
              "camping": 'camping',
              "other": 'Something else'
            }}
          />
          <InputField style={styles.smText}
            ref="other"
            placeholder="If you selected 'something else', tell us what."
          />
          <InputField style={styles.smText}
            ref="description"
            placeholder="Description"
            multiline={true}
          />
          <InputField style={styles.smText}
            ref="extra"
            placeholder="Anything else?"
            multiline={true}
          />
        </Form>
        <TouchableHighlight
          style={styles.btn}
          onPress={this.goToFeed}
          underlayColor="white">
          <Text style={styles.btnText}>Create Event</Text>
        </TouchableHighlight>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 64,
    backgroundColor: 'rgba(126, 165, 111, 0.63)',
  },
  form:{
    color: '#FBFBFB',
  },
  input : {
    height: 30,
    width: '100%',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  btn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 160,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(250, 250, 250, 0.72)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
