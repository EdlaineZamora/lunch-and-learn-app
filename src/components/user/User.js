import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class User extends Component {
    render() {
        return (
            <View style={styles.inputUserWrap}>
                <View style={styles.iconWrap}>
                    <Ionicons name='ios-person' size={20} />
                </View>
                <TextInput
                    placeholder="Usuário"
                    placeholderTextColor="#000"
                    style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
    inputUserWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 2,
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

export default User;