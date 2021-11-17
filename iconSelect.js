import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native";


function GoToTeamSelect({ registratinScreen }) {
    const navigation = useNavigation();
    return (
      <Button
      style={styles.button}
      title={ " GO TO THE ICON "}
      onPress= {() => navigation.navigate('icon selector')}/>
    )
    }
export default ( { navigation }) => (
    <SafeAreaView> 
      <Text>
        This is where you select your icon
        </Text>
        <Button title = "Continue to team selection screen" onPress = {() => navigation.navigate('team selector')}/>

        {/* <Button style={styles.button} title= " second button " onPress= {() => { navigate.navigate("SplashScreen");
        }} /> */}
        {/* <iconSelect /> */}
    </SafeAreaView>

)


const styles =StyleSheet.create ({
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
})