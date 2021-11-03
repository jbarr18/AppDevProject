import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends React.Component {
    render() {
        return (
            <View style = {styles.regform}>
                <Text style = {styles.header}>Registration</Text>

                <TextInput style={ styles.textinput} placeholder= "Your name" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    regform: {
       alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height:40,
        marginBottom: 30,

    }
    
    
});