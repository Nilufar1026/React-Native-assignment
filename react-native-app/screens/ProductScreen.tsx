import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StyledButton from '../components/Button';
import Products from '../components/Products';
import { IOwnProduct, IProduct } from '../types/types';
import NewProductScreen from './NewProductScreen';

const ProductScreen:React.FC<IOwnProduct>=(props)=> {
  const handleNewProduct= ()=>{
    props.navigation.navigate('NewProduct')
  }
  return (
    <View style={styles.productContainer}>

      {/* <View style={styles.itemContainer}> */}
      {/* <Button onPress={() => alert('This is a button!')}
          title="Create new product"
          color="red" /> */}
      {/* <TouchableOpacity style={styles.addWrapper}>
        <View style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity> */}
      <StyledButton 
      height={50} 
      width={50} 
      borderRadius={50} 
      ButtonText={"+"} 
      marginTop={15}
      alignItems={"flex-end"}
      fontSize={30}
      handleAdd={()=>handleNewProduct()}/>
      {/* <NewProductScreen  /> */}
      <Products />
      {/* <View style={styles.separator} />

      </View> */}
    </View>
  )



    ;
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'column',
    backgroundColor: '#f1f1f1',
    flex: 1
  },
  addWrapper: {
    alignItems: 'flex-end',
    marginRight: 10
  },
  addButton: {
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  addText: {
    fontSize: 30
  }


});
export default ProductScreen
