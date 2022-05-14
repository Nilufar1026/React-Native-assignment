import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './navitators/BottomTabs';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import ButtomTabs from './navitators/BottomTabs';
import StackNavigator from './navitators/StackNavigator';

export default function App() {
  const [isLogged,setIsLogged] =useState(true)
  return isLogged ? (
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    )
      : (
        <LoginScreen />
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
