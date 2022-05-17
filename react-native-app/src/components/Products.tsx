import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IProduct, IProducts } from '../types/types';
import { AntDesign } from '@expo/vector-icons'; 
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Products: React.FC<IProducts> = (props) => {
    
    const deleteProduct= async(productId:string)=>{
        await deleteDoc(doc(db, "product", productId));
        let updatedproducts = [...props.products.filter((item)=>item.id!=productId)]
        props.setProducts(updatedproducts)
    }

    const renderProductItem = (product:IProduct) => {
        return (
        <View style={styles.itemWrapper}>
            <View style={{flexDirection:"row",justifyContent:"space-around",flex:1}}>
                <View style={styles.itemContainer} >
                    <Text style={styles.itemName}>{product.name}</Text>
                    <Text style={styles.itemPrice}>Price: {product.price} KR</Text>
                </View>
                <AntDesign 
                name="delete" 
                size={30} 
                color="red" 
                style={{alignSelf:"center",marginLeft: "auto"}} 
                onPress={()=>deleteProduct(product.id)}/>

            </View>
            <View style={styles.separator} />
        </View>

        )}
    
    const keyExtractor = useCallback((item, index) => `${item.id}${index}`, []);

    return (
        <View>

            <FlatList
                data={props.products}
                keyExtractor={keyExtractor}
                renderItem={(item)=>renderProductItem(item.item)}
            />
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    itemWrapper: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        margin: 20
    },

    itemContainer: {
        flexWrap: 'wrap',
        textAlign: 'left'
    },
    itemName: {
        fontSize: 30
    },
    itemPrice: {},
    itemType: {},
    separator: {
        height: 5,
        color: "#fff"
    },

});

export default Products