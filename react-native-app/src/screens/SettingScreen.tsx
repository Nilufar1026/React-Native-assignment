import { StatusBar } from 'expo-status-bar';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from '../components/Button';
import { auth } from '../firebase';

export default function SettingScreen() {
  const logOut=()=>{
    signOut(auth).then(()=>{
      
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <View>
      <StyledButton
       height={50} 
       width={150} 
       borderRadius={20} 
       ButtonText={"Sign out"} 
       marginTop={15}
       alignItems={"center"}
       fontSize={15}
       borderWidth={5}
       handleAdd={logOut} />
    </View>

    )
    
    
    
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
