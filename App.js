import React from 'react';
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import Header from './App/Header';
import Data from './App/Data';
//import 'semantic-ui-css/semantic.min.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regform from './App/components/Regform';


function WelcomeScreen ({ navigation }) {
  return (

    <View style = {{ flex: 1 }} >
      <Text style = {styles.Button}>
        This is the welcome screen 
        </Text>
        <Button title = "Continue to registration screen" onPress = {() => navigation.navigate('registration')}/>
    </View>

  );
}
function registrationScreen ({ navigation }) {
  return (

    <View style = {{ flex: 1 }} >

        <Regform />
        <Button title = "Go to Icon selector" onPress = {() => navigation.navigate('icon selector')}/>
    </View>
  );
}


function iconSelect ({ navigation }) {
  return (

    <View style = {{ flex: 1 }} >
      <Text style = {styles.Button}>
        This is where you select your icon
        </Text>
        <Button title = "Continue to team selection screen" onPress = {() => navigation.navigate('team selector')}/>
    </View>
  );
}



function dataScreen ({ navigation }) {
  return (
  //<Header>
    <View style = {{ flex: 1 }} >
      {/* <Text style = {styles.Button}>
        This is the page where the data is shown */}
        <Data />
      {/* </Text> */}
    </View>
    //</Header>
  )
}
function teamSelector ({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Team 1'}
          </Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Team 2'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console"></Text>
      </View>
      <Button title = "Continue to Data screen" onPress = {() => navigation.navigate('data screen')}/>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "welcome" component= {WelcomeScreen}/>
        <Stack.Screen name = "registration" component = {registrationScreen} />
        <Stack.Screen name = "icon selector" component = {iconSelect} />
        <Stack.Screen name = "data screen" component= {dataScreen}/>
        <Stack.Screen name = "team selector" component= {teamSelector} />
      
        {/* <>
        <Header />
        <Data />
        </> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeScreen: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'

  },
  Button: {
    fontSize: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#add8e6',
    borderColor: '#add8e6',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  text: {
    fontSize: 16
  }

});
