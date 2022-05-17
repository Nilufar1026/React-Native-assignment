
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import StyledButton from '../components/Button';
import Products from '../components/Products';
import { IOwnProduct, IProduct } from '../types/types';
import NewProductScreen from './NewProductScreen';
import { db } from '../firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ProductScreen: React.FC<IOwnProduct> = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState([])
  const handleNewProduct = () => {
    setShowModal(true)
  }

  const addProduct = async (product: IProduct) => {
    try {
      let newProduct: IProduct = {
        name: product.name,
        price: product.price,
        type: product.type,
        id: ""
      }

      const docRef = await addDoc(collection(db, "product"), { 
        name: product.name,
        price: product.price,
        type: product.type,
        })
      newProduct.id = docRef.id
      let updatedProduct: any = [...products]
      
      updatedProduct.push(newProduct)
      setProducts(updatedProduct)
    } catch (error) {
      console.log(error);
    }
  }

  const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product"));
      let products: any = []
      querySnapshot.forEach((doc) => {
        let product = doc.data()
        product.id = doc.id
        products.push(product)
      });
      setProducts(products)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
 
  return (
    <View style={styles.productContainer}>
      <StyledButton
        height={50}
        width={50}
        borderRadius={50}
        ButtonText={"+"}
        marginTop={45}
        alignItems={"flex-end"}
        fontSize={30}
        borderWidth={0}
        handleAdd={() => handleNewProduct()} />
      <Modal visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent={false}
        animationType="none">
        <NewProductScreen onClose={() => setShowModal(false)} addProduct={addProduct} showModal={showModal} />
      </Modal>
      <Products products={products} setProducts={(p: any) => setProducts(p)} />
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
