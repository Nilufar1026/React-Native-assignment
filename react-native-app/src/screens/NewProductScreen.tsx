import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import StyledButton from '../components/Button';
import InputField from '../components/InputField';
import { INewProduct } from '../types/types';

const NewProductScreen:React.FC<INewProduct> = (props) => {
  
  const [nameText,setNameText]= useState("")
  const [priceText,setPriceText]= useState("")
  const [typeText,setTypeText]= useState("")

  let product = {
    name:nameText,
    price:priceText,
    type:typeText,
    id:""
  }
 const handleAddProduct=()=>{
   if (nameText!=="" && priceText!=="" && typeText!=="") {
     props.addProduct(product);
     props.onClose()
   }
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
         <View style={{flexDirection:'row',justifyContent:"center"}}>

        <StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Add product"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        borderWidth={5}
        handleAdd={handleAddProduct}
        />
        <StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Cancel"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        borderWidth={5}
        handleAdd={()=>props.onClose()}
        />
         </View>
      </View>
    )
}

const styles = StyleSheet.create({
  newProductContainer: {
    flex: 1,   
    marginTop:50  
  },
});

export default NewProductScreen