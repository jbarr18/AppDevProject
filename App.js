import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';

import SplashScreen from './Components/splashScreen';
import Regform from './Components/Regform';
import OnboardingItem from './Components/OnboardingItem';
import iconSelect from './Components/iconSelect';
import teamSelector from './Components/teamSelector';
import Data from './Components/Data';
import CheckPicks from './Components/CheckPicks';

const Stack = createNativeStackNavigator();

function RegistrationForm() {
  return (
    <View>
      <Regform /> 
    </View>
  )
}

function iconSelectScreen () {
  return (
    <View>
      <iconSelect/>
    </View>
  )
}
function teamSelectorScreen () {
  return (
    <View>
      <teamSelector />
    </View>
  )
}
function OnboardingScreen () {
  return(
    <View> 
      <OnboardingItem />
    </View>
  )
}
function Splash () {
  return ( 
    <View style={{ flex: 1,}}>
      <SplashScreen/>
      </View>
   
  )
}
function DataScreen () {
  return ( 
    <View style={{ flex: 1,}}>
      <Data/>
      </View>
   
  )
}



//The parameter in the regform function is passed but never read, therefore I dont think i need parameter here.
// function GetStarted({  }) {
//   const navigation = useNavigation();
//   return (
//     <Button
//     title={ " GO TO THE ICON SELECTION SCREEN "}
//     onPress= {() => navigation.navigate('icon selector')}/>
//   )
//   }


const  App = () => {
  return (
    <SafeAreaProvider>
      {/* <Data /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name = "SplashScreen" component={ Splash } />
          <Stack.Screen name = "Regform" component={ RegistrationForm } />
          <Stack.Screen name = "icon selector" component={ iconSelect } />
          <Stack.Screen name = "team selector" component={ teamSelector } />
          <Stack.Screen name = "data screen" component={ Data } />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App;



const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {

  }

});