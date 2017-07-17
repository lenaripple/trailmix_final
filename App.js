import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button,  NavigatorIOS } from 'react-native';
import Splash from './Components/Splash';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <NavigatorIOS
            initialRoute={{
            component: Splash,
            title: 'Welcome',
            }}
            style={{flex: 1}}
          />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})
