
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,ImageBackground, Pressable} from 'react-native';
import StyledButton from '../components/Button';
import InputField from '../components/InputField';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
import { useLinkProps } from '@react-navigation/native';
import { ISignUp } from '../types/types';


 const SignUp:React.FC<ISignUp> =(props)=> {

 const [userValues,setUserValues]= useState({
   email:"",
   password:""
 })


 const handleChange =(text:string,eventName:string) =>{
   setUserValues(prev=>{
     return{
       ...prev,
       [eventName]:text
     }
   })
 }

        const signUp=()=>{
            createUserWithEmailAndPassword(auth,userValues.email,userValues.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                props.onClose()
                
                // ...
              })
              .catch((error) => {
                const errorMessage = error.message;
                // ..
              });

        }
    
const backgroundImage= require("../../assets/background.jpg")
  return ( 
  <ImageBackground style={styles.loginContainer} source={backgroundImage}>
    <View style={styles.loginBackground}>
    <Text style={{fontSize:30}}>Sign up</Text>
    <InputField 
     placeholder="Email" 
     accessibilityLabel={'email'} 
     value={userValues.email} 
     inputOnChange={(t:string)=>handleChange(t,"email")} 
     secureTextEntry={false}
     />
    <InputField 
     placeholder="Password" 
     accessibilityLabel={'Password'} 
     value={userValues.password} 
     inputOnChange={(t:string)=>handleChange(t,"password")} 
     secureTextEntry={true}
     />
    

     <Text >Already have an account
   <Pressable onPress={()=>props.onClose()} 
   >
    <Text style={{color:"blue"}}>Login</Text>
   </Pressable>

     </Text>
<StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Sign up"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        handleAdd={signUp}
        borderWidth={5}
        />
    </View>
    
    
    </ImageBackground>
  )

    
    
    
  }

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1, 
    justifyContent:"center",
    alignItems:"center"
  },
  loginBackground:{
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    alignSelf:'stretch',
    padding:16
  }
});
export default SignUp
