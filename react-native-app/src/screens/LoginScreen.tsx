import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,ImageBackground, Pressable,Modal} from 'react-native';
import StyledButton from '../components/Button';
import InputField from '../components/InputField';
import { auth } from '../firebase';
import { ILogin } from '../types/types';
import SignUp from './SignUp';


 const LoginScreen:React.FC<ILogin> =(props)=> {

if (auth.currentUser) {
  props.setIsLogged(true)
}else{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      props.setIsLogged(true)   
    }
  });
}

 const [userValues,setUserValues]= useState({
   email:"",
   password:""
 })
 let [errorMessage,setErrorMessage]=useState("")

 const [showSignUpModal,setShowSignUpModal]=useState(false)
 const handleChange =(text:string,eventName:string) =>{
   setUserValues(prev=>{
     return{
       ...prev,
       [eventName]:text
     }
   })
 }
const handleLogin=()=>{
  if(userValues.email !== "" && userValues.password !== ""){
    signInWithEmailAndPassword(auth, userValues.email, userValues.password)
    .then((userCredential) => {
      // Signed in 
      props.setIsLogged(true)
      // ...
    })
    .catch((error) => {
      setErrorMessage(errorMessage)
    });
    
  }else{
    setErrorMessage("Email or password is not correct")
  }

}
    
const backgroundImage= require("../../assets/background.jpg")
  return ( 
  <ImageBackground style={styles.loginContainer} source={backgroundImage}>
    <Modal visible={showSignUpModal} 
        onRequestClose={()=>setShowSignUpModal(false)} 
        transparent={false}
        animationType="none">
          <SignUp  onClose={()=>setShowSignUpModal(false)} />
    </Modal>
    <View style={styles.loginBackground}>
    <Text style={{fontSize:30}}>Login</Text>
    <Text >{errorMessage}</Text>
    <InputField 
     placeholder="Email" 
     accessibilityLabel={'email'} 
     value={userValues.email} 
     inputOnChange={(t:string)=>handleChange(t,"email")} 
     secureTextEntry={false}
     />
    <InputField 
     placeholder="Password" 
     accessibilityLabel={'password'} 
     value={userValues.password} 
     inputOnChange={(t:string)=>handleChange(t,"password")} 
     secureTextEntry={true}/>
     <Text>Don´t have an account
   <Pressable onPress={()=>setShowSignUpModal(true)} >
    <Text style={{color:"blue"}}>Register now</Text>
   </Pressable>

     </Text>
<StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Sign In"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        borderWidth={5}
        handleAdd={handleLogin}
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
export default LoginScreen
