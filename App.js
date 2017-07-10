import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button,  NavigatorIOS } from 'react-native';

// import Login from './Components/Login';
import Splash from './Components/Splash';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
          component: Splash,
          title: 'Home',
          }}
          style={{flex: 1}}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})
