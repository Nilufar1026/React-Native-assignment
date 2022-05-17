import { signOut } from 'firebase/auth';
import {  View } from 'react-native';
import StyledButton from '../components/Button';
import { auth } from '../firebase';
import { IBottomTab } from '../types/types';


const SettingScreen:React.FC<IBottomTab>=(props)=> {
  const logOut=()=>{
    signOut(auth).then(()=>{
      props.setIsLogged(false)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <View style={{flex:1,justifyContent:"center"}}>
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
}


export default SettingScreen