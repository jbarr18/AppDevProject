import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable, Button } from 'react-native';
import footballIcon from '../assets/football.png';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";
import { registerRootComponent } from "expo";


// class Regform extends Component {
//     render () {
//         return (
//             <View style={styles.regform} >
//                 <Text> this is the reg form</Text>
//             </View>
//         );
//     }
// }

// export default Regform;



// export default ({ navigation }) => (
//     <SafeAreaView>
//         <Button title= "first button" onPress= {() => { navigation.navigate("Welcome");
//         }} /> 
//     </SafeAreaView>
// )


//The registrationScreen parameter is passed but never read.

function GoToIcon({ registratinScreen }) {
    const navigation = useNavigation();
    return (
      <Button
      style={styles.button}
      title={ " GO TO THE ICON "}
      onPress= {() => navigation.navigate('icon selector')}/>
    )
    }

export default class Regform extends React.Component {
    render() {
        return (
            <View style = {styles.regform}>
                <Image source={require('../assets/quarterback.png')} style={styles.footballIcon}></Image>
                <TextInput style={ styles.textinput} placeholder= "Enter your name" />
                <TouchableOpacity style={styles.submit}>   
                    <GoToIcon />
                </TouchableOpacity>
                
                {/* <Button title = "Go to Icon selector" onPress = {() => navigation.navigate('icon selector')}/> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    regform: {
    //    alignSelf: 'stretch',
       //flex: 1,
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
    },
    textinput: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        width: 300,
        height: 50,
        padding: 15,
        margin: 10,
        fontSize: 20
    },
    submit: {
        marginTop: 50,
        borderWidth: 1,
        borderColor: '#1183ca',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 80,
        backgroundColor: '#98FB98',
    },
    footballIcon: {
        width: '80%',
        height: 400,
        resizeMode: 'contain'


    },
    button: {
        // flex: 0.1,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#1183ca',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 80,
        marginBottom: 40,
        backgroundColor: '#98FB98',
    }
});