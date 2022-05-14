import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './navitators/BottomTabs';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import ButtomTabs from './navitators/BottomTabs';
import { app, auth } from './firebase-config';

export default function App() {
  const [isAuth,setIsAuth] =useState(false)
  app

  auth.onAuthStateChanged( (user) => {
    if (user ) {
      console.log('We are authenticated now!');
      setIsAuth(true)
    }else {
      setIsAuth(false)
    }
  
    // Do other things
  });
  return isAuth ? (
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    )
      : (
        <LoginScreen setIsAuth={setIsAuth}/>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
