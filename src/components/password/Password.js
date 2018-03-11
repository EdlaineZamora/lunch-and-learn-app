import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Password extends Component {
    render() {
        return (
            <View style={styles.inputPasswordWrap}>
                <View style={styles.iconWrap}>
                    <Ionicons name='ios-lock' size={20} />
                </View>
                <TextInput
                    placeholderTextColor="#000"
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry/>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
    inputPasswordWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
      },
      input: {
        flex: 1,
        paddingHorizontal: 10,
      },
      iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
      },
    }
)

export default Password;