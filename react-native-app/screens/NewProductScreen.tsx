import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInputProps, TouchableOpacity, View } from 'react-native';
import InputField from '../components/InputField';
import StyledButton from '../components/Button';
import { IInputField, INewProduct } from '../types/types';

const NewProductScreen: React.FC<INewProduct> = (props) => {
  const [nameText,setNameText]= useState("")
  const [priceText,setPriceText]= useState("")
  const [typeText,setTypeText]= useState("")
  const handleAddProduct=()=>{
    console.log(nameText,priceText,typeText);
    
  }
  return (
    <View style={styles.newProductContainer}>
        <InputField  
        placeholder="Write name of your product" 
        accessibilityLabel={'name'} 
        value={nameText} 
        inputOnChange={(t:string)=>setNameText(t)} />
        <InputField  
        placeholder="Price" 
        accessibilityLabel={'Price'} 
        value={priceText} 
        inputOnChange={(t:string)=>setPriceText(t)}/>
        <InputField  
        placeholder="Write type of your product" 
        accessibilityLabel={'type'} 
        value={typeText} 
        inputOnChange={(t:string)=>setTypeText(t)}/>
        <StyledButton 
        height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Add Product"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        handleAdd={()=>handleAddProduct()}/>
    </View>

    )
    
    
    
  ;
}

const styles = StyleSheet.create({
  newProductContainer: {
    flex: 1,
    
    
  },
});

export default NewProductScreen