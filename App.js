import React from 'react';
import {Constants} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginScreen from './src/components/LoginScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MobileFlashCardStatusBar backgroundColor={"#000"} barStyle="light-content"/>
        <Text>Login2!</Text>        
        <LoginScreen></LoginScreen>
      </View>
    );
  }
}

const MobileFlashCardStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
