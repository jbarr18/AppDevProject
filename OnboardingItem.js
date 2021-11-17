import React, {Component} from "react";
import { View, Image, Text, StyleSheet, Button, useWindowDimensions, Pressable, TouchableHighlight} from 'react-native';
// import navigation from "../config/navigation";
// import Regform from "./Regform";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import Regform from "./Regform";

// class Regform extends Component {
//     render() {
//         return (
//             <View  style= {styles.container} >
//                 <Text>This is the reg form</Text>
//                 <Button title= " Go to the next page "
//                 onPress={()  => this.props.navigation.navigate('Regform')}
//                 />
//             </View>
//         );
//     }
// }

// export default Regform;

function GoToRegForm() {
    const navigation = useNavigation();
    return (
    //   <Button 
    //   style={styles.button}
    //   title={ " Get Started "}
    //   onPress= {() => navigation.navigate('Regform')}/>
    <TouchableHighlight>
                <Button style={styles.button} title= "Get Started" onPress= {() => navigation.navigate('Regform')}></Button>
                </TouchableHighlight>
    );
    }

export default function OnboardingItem ( { item  }) {
    const { width } = useWindowDimensions();

    return (
        <View style= {[styles.container, { width }] }>
            <Image source = {item.image} style ={[ styles.image, { width }]} />

            <View style={{ flex: 0.1}}> 
                <Text style={styles.title}> { item.title }</Text>
                <Text style={styles.description}> { item.description }</Text>
            </View>
            <View style= {styles.button}>
                <GoToRegForm />
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    //fix images to be sized accordingly
    image: {
        resizeMode: 'contain',
        flex: 0.9, 
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#492d8a',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
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