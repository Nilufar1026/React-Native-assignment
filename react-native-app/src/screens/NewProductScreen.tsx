import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInputProps, TouchableOpacity, View } from 'react-native';
import InputField from '../components/InputField';
import StyledButton from "../components/Button";
import { INewProduct } from '../types/types';
import { useLinkProps } from '@react-navigation/native';

const NewProductScreen:React.FC<INewProduct> = (props) => {
  
  const [nameText,setNameText]= useState("")
  const [priceText,setPriceText]= useState("")
  const [typeText,setTypeText]= useState("")

  let product = {
    name:nameText,
    price:priceText,
    type:typeText
  }
 

  return (

      <View style={styles.newProductContainer}>
          <InputField  
          placeholder="Write name of your product" 
          accessibilityLabel={'name'} 
          value={nameText} 
          inputOnChange={setNameText} 
          secureTextEntry={false}
          />
          <InputField  
          placeholder="Price" 
          accessibilityLabel={'Price'} 
          value={priceText} 
          inputOnChange={setPriceText}
          secureTextEntry={false}
          />
          <InputField  
          placeholder="Write type of your product" 
          accessibilityLabel={'type'} 
          value={typeText} 
          inputOnChange={setTypeText}
          secureTextEntry={false}
         />
          {/* <StyledButton 
          height={50} 
          width={150} 
          borderRadius={20} 
          ButtonText={"Add Product"} 
          marginTop={15}
          alignItems={"center"}
          fontSize={15}
          handleAdd={()=>{
            props.onClose()
          }}/> */}
          <Button title='ok' onPress={()=>{
            props.addProduct(product);
            props.onClose();
          }}/>
      </View>
    // )
    

    // }

    )
    
    
    
  ;
}

const styles = StyleSheet.create({
  newProductContainer: {
    flex: 1,
    
    
  },
});

export default NewProductScreen