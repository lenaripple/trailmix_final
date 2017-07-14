import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, NavigatorIOS, TextInput } from 'react-native';

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
        <Text style={styles.header}>Add an Event</Text>
        <Form style={styles.form} ref='newEventForm' label='New Event'>
          <InputField style={styles.smText}
            ref="title"
            label="Trip Title"
            placeholder=""
          />
          <DatePickerField ref='date'
            minimumDate={new Date()}
            maximumDate={new Date('12/31/2018')}
            placeholder='Date'/>
          <InputField style={styles.smText}
            ref="location"
            label="Location"
            placeholder="Location"
          />
          <InputField style={styles.smText}
            ref="description"
            label="escription"
            placeholder="Description"
          />
          <InputField style={styles.smText}
            ref="extra"
            label="Extras"
            multiline={true}
            placeholder="Anything else?"
          />
          <InputField style={styles.smText}
            ref="rating"
            label="Rating"
            placeholder="How intense?"
          />
        </Form>
        <Button
          onPress={this.goToFeed}
          title="Submit"
        />
        <NavMenu goFeed={this.goToFeed} goAddEvent={this.goToAddEvent} goHome={this.goToHome} goSearch={this.goToSearch}/>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    // padding: 20,
    flexDirection: 'column',
    backgroundColor: '#7DA46D',
    justifyContent: 'center'
  },
  // container: {
  //   flex:1,
  //   flexDirection: 'column',
  //   backgroundColor: '#7DA46D',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '#FCF9FC'
  // }
  form:{
    marginTop:50
  },
  input : {
    height: 40,
    width: '100%',
    textAlign: 'center',
    marginTop: 10
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#FBFBFB',
    fontWeight: 'bold'
  }
});
