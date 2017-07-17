import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
  } from 'react-native-form-generator';
import Feed from './Feed';
import NavMenu from './NavMenu';
import Home from './Home';
import Search from './Search';

import {PostApi} from '../Constants/api'

const postapi = new PostApi()
// var slicedDate=''

export default class AddEvent extends React.Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToFeed = this.goToFeed.bind(this)
    this.goToAddEvent = this.goToAddEvent.bind(this)
    this.state = {title: '', date:'', location: '', description: '', extra: ''}
  }

  static defaultProps = {
    postapi
  }

  state = {
    loading: false,
    post: []
  }

  handleSubmit(){
    const newTitle = this.refs.newEventForm.values.title
    const newDate = this.refs.newEventForm.values.date.toString()
    const newLocation = this.refs.newEventForm.values.location
    const newActivity = this.refs.newEventForm.values.activity
    const newDescription = this.refs.newEventForm.values.description
    const newExtra = this.refs.newEventForm.values.extra
    const newData = {};

    newData['_title']=newTitle;
    newData['date']=newDate;
    newData['location']=newLocation;
    newData['activity']=newActivity;
    newData['description']=newDescription;
    newData['extra']=newExtra;

    this.props.postapi.createPosts(newData)
    this.goToFeed()
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
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="interactive">
          <Form
            style={styles.form}
            ref='newEventForm'
            label='Event Information'>
            <InputField
              ref="title"
              placeholder="Event Title"
            />
            <DatePickerField
              ref='date'
              minimumDate={new Date()}
              maximumDate={new Date('12/31/2018')}
              placeholder='Date'/>
            <InputField
              ref="location"
              placeholder="Location"
            />
            <PickerField
              label='Primary Activity'
              options={{
                "":"",
                "hiking":'Hiking',
                "backpacking": 'Backpacking',
                "climbing": 'Climbing',
                "camping": 'Camping',
                "other": 'Something else'
              }}
            />
            <InputField
              ref="other"
              multiline={true}
              placeholder="If 'something else', tell us what."
            />
            <InputField
              ref="description"
              placeholder="Description"
              multiline={true}
            />
            <InputField
              ref="extra"
              placeholder="Anything else?"
              multiline={true}
            />
          </Form>
          <TouchableHighlight
            style={styles.btn}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white">
            <Text style={styles.btnText}>Create Event</Text>
          </TouchableHighlight>
        </ScrollView>
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: '#7DA46D',
  },
  container:{
    backgroundColor: '#7DA46D',
    paddingBottom: 40
  },
  form:{
    // color: '#FBFBFB',
    margin: 10,
  },
  btnText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  btn: {
    margin: 10,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(250, 250, 250, 0.72)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
