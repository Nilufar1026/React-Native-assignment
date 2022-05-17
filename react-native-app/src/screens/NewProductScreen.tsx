import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import StyledButton from '../components/Button';
import InputField from '../components/InputField';
import { INewProduct } from '../types/types';

const NewProductScreen:React.FC<INewProduct> = (props) => {
  
  const [nameText,setNameText]= useState("")
  const [priceText,setPriceText]= useState("")
  const [typeText,setTypeText] = useState([
    {label: 'Fruit', value: 'Fruit'},
    {label: 'Vegetable', value: 'Vegetable'}
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // const [typeText,setTypeText]= useState("")

  let product = {
    name:nameText,
    price:priceText,
    type:value,
    id:""
  }
 const handleAddProduct=()=>{
   if (nameText!=="" && priceText!=="" ) {
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
         <DropDownPicker
      open={open}
      value={value}
      items={typeText}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setTypeText}
      style={{
        width:350,
       borderRadius:60,
       paddingHorizontal:15,
       paddingVertical:15,
       backgroundColor:'#fff',
       borderColor:'#c0c0c0',
       borderWidth:2,
       margin:15
      }}
    />
         <View style={{flexDirection:'row',justifyContent:"center"}}>

        <StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Add product"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        borderWidth={2}
        handleAdd={handleAddProduct}
        />
        <StyledButton height={50} 
        width={150} 
        borderRadius={20} 
        ButtonText={"Cancel"} 
        marginTop={15}
        alignItems={"center"}
        fontSize={15}
        borderWidth={2}
        handleAdd={()=>props.onClose()}
        />
         </View>
      </View>
    )
}

const styles = StyleSheet.create({
  newProductContainer: {
    flex: 1,   
    marginTop:50  ,
    // justifyContent:"center",
    // alignItems:"center",
  },
});

export default NewProductScreen