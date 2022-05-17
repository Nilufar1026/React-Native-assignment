import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './navitators/BottomTabs';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './navitators/StackNavigator';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';


initializeApp(firebaseConfig)
export default function App() {
  const [isLogged,setIsLogged] =useState(false)
  return isLogged ? (
      <NavigationContainer>
        <BottomTabs setIsLogged={setIsLogged}/>
      </NavigationContainer>
    )
    // 
      : (
      //   <NavigationContainer>
      //   <StackNavigator setIsLogged={setIsLogged}/>
      // </NavigationContainer>
        <LoginScreen setIsLogged={(b)=>setIsLogged(b)}/>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
