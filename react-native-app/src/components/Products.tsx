import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { IProduct, IProducts } from '../types/types';
import { AntDesign } from '@expo/vector-icons'; 
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Products: React.FC<IProducts> = (props) => {
    // const products: IProduct[] = [
    //     {
    //         id: 1,
    //         name: "citron",
    //         price: 0.5,
    //         type: "vegetable"
    //     },
    //     {
    //         id: 2,
    //         name: "peach",
    //         price: 0.2,
    //         type: "frut"
    //     }
    // ]
    const deleteProduct= async(productId:string)=>{

        await deleteDoc(doc(db, "product", productId));
        let updatedproducts = [...props.products.filter((item)=>item.id!=productId)]

        props.setProducts(updatedproducts)
    }
    console.log("product",props.products)

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
            {/* <Text style={styles.itemType}>Vegetable</Text>
            <Text style={styles.itemType}>Fruit</Text> */}
            <FlatList
                data={props.products}
                // keyExtractor={(item) => item.id}
                keyExtractor={keyExtractor}
                renderItem={(item)=>renderProductItem(item.item)}
            // renderItem={({ item }) => renderProductItem(item)}
            />


            {/* {!props.isRefreshing && filteredCompetitionList.length === 0 && ( 
       {/* <Box padding="sm" alignItems="center" justifyContent="center">
          <ContentText type="description" color="disabled" textalign="center">
            Could not find any competitions
          </ContentText>
       </Box>
       )} */}

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
        // height: 70,
        // boxShadow: "0 0 5px rgba(0, 0, 0, 5)",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        margin: 20
        // padding: 1,
        // display: "flex",
        // width:"80%"
    },

    itemContainer: {
        // flexDirection:'row',
        // alignItems:'center',
        flexWrap: 'wrap',
        textAlign: 'left'
        // flex: 1,
        // height: 70,
        // boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)"
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