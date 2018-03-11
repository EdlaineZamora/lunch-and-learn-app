import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import User from './user/User.js'
import Password from './password/Password.js'

const { width, height } = Dimensions.get("window");

const mark = require("./logo.jpg");

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <User />
            <Password />
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Logar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Não tem uma conta?</Text>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.signupLinkText}>Cadastrar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputPasswordWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#3c6fc1",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: 'black'
  },
  accountText: {
    color: "#000"
  },
  signupLinkText: {
    color: "#000",
    marginLeft: 5,
  }
});