import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StyledButton from '../components/Button';
import Products from '../components/Products';
import { IOwnProduct, IProduct } from '../types/types';
import NewProductScreen from './NewProductScreen';
import {db} from '../firebase'
import { collection , addDoc, query, getDocs } from 'firebase/firestore';

const ProductScreen:React.FC<IOwnProduct>=(props)=> {

  const [showModal,setShowModal ] =useState(false)
  const [products,setProducts]=useState([])
  const handleNewProduct= ()=>{
    setShowModal(true)
  }

  const addProduct =async (product:IProduct) => {
    console.log("added?",product)
    try{

      const docRef = await addDoc(collection(db,"product"),{
        name:product.name,
        price: product.price,
        type:product.type
      })
      console.log(docRef)
      
    }catch(error){
      console.log(error);  
    }
  }
  const getProducts =async () => {
    try{

      const querySnapshot = await getDocs(collection(db, "product"));
      let products:any=[]
querySnapshot.forEach((doc) => {
  let product = doc.data()
  product.id=doc.id
  products.push(product)
  // console.log(products);
  
});
      console.log(products)
      setProducts(products)
    }catch(error){
      console.log(error);  
    }
  }

  useEffect(()=>{
    getProducts()
  },[])

  // const onClose = () =>{
  //   setShowModal(false)
  //   console.log("closed")
  // }
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
        <Modal visible={showModal} 
        onRequestClose={()=>setShowModal(false)} 
        transparent={false}
        animationType="none">
          <NewProductScreen  onClose={()=>setShowModal(false)} addProduct={addProduct} showModal={showModal}/>
        </Modal>
      {/* <NewProductScreen  /> */}
      <Products products={products}/>
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
