import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from '../components/Button';
import { ILogin } from '../types/types';
import * as GoogleSignIn from 'expo-google-sign-in'
import expo from 'expo'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import * as firebase from 'firebase/app'
import { auth } from '../firebase-config';
import {signInWithEmailAndPassword} from'firebase/auth'
import InputField from '../components/InputField';


 const LoginScreen: React.FunctionComponent<ILogin> =({setIsAuth})=> {

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
  //  useEffect(()=>{
  //    initAsync
  //  })
  //  const initAsync =async()=>{
  //   try {
  //     await GoogleSignIn.initAsync({
  //       clientId:"121125198617-06ahde7s7hk8oqb3ojk167gq31dm2i2t.apps.googleusercontent.com"
  //     })
  //   }catch{
  //   }
  // }
  // const getUser = async()=>{
  //   const user= await GoogleSignIn.signInSilentlyAsync()
  //   console.log(user)
  // }
  const signInWithGoogle=async()=>{
    console.log("hello")
  //   const  {email,password }=userValues
  //   signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   setIsAuth(true)
  //   // ...
  // })
  // .catch((error) => {
  //   console.log(error)
  // });
    // try {
      // await GoogleSignIn.askForPlayServicesAsync()
      // const {type ,user}=await GoogleSignIn.signInAsync()
      // if (type==="success"){
      //   getUser()
      // }else{
      //   console.log("error");
        
      }
    // }catch{ console.log("error");}
    // auth.onAuthStateChanged((user)=>{
    //   if(user){
    //     setIsAuth(true)
    //   }else{
    //     setIsAuth(false)
    //   }
    // })
        // signInWithPopup(auth,provider).then((result)=>{
        //     let trueFalse:any=true
        //     localStorage.setItem("isAuth", trueFalse )
        //     setIsAuth(true)
        // })
    

  return ( 
  <View style={styles.loginContainer}>
    <Text>Sign in with Google to continue</Text>
    <InputField 
     placeholder="Email" 
     accessibilityLabel={'email'} 
     value={userValues.email} 
     inputOnChange={(t:string)=>handleChange(t,"email")} 
     />
    <InputField 
     placeholder="Email" 
     accessibilityLabel={'email'} 
     value={userValues.password} 
     inputOnChange={(t:string)=>handleChange(t,"password")} 
     secureTextEntry={true}/>
<StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Sign In"} 
        marginTop={45}
        alignItems={"center"}
        fontSize={15}
        handleAdd={()=>signInWithGoogle()}
        />
    
    </View>
  )

    
    
    
  }

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
    
  },
});
export default LoginScreen





// import React from "react";
// import { auth, provider } from "../../firebase-config";
// import {signInWithPopup} from 'firebase/auth'
// // import './login.css'



// type OwnProps = {
//     setIsAuth: (isAuth: boolean) => void;
//   }
  
//   type Props = OwnProps

// const Login: React.FunctionComponent<Props> =({setIsAuth})=> {
// const signInWithGoogle=()=>{
//     signInWithPopup(auth,provider).then((result)=>{
//         let trueFalse:any=true
//         localStorage.setItem("isAuth", trueFalse )
//         setIsAuth(true)
//     })
// }
  
//   return (
//     <div className="login" id="login">
//       <p>Sign in with Google to continue</p>
//       <button onClick={signInWithGoogle}>Sign  in</button>
//     </div>
//   );
// }

// export default Login;