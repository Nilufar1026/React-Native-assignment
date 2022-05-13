import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { IProduct } from '../types/types';

export default function Products() {
    const products: IProduct[] = [
        {
            id: 1,
            name: "citron",
            price: 0.5,
            type: "vegetable"
        },
        {
            id: 2,
            name: "peach",
            price: 0.2,
            type: "frut"
        }
    ]

    const renderProductItem = (product:IProduct) =>  (
        <View style={styles.itemWrapper}>
                
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{product.name}</Text>
                <Text style={styles.itemPrice}>{product.price} KR</Text>
            </View>
             <View style={styles.separator} />
             </View>
        )
        const keyExtractor = useCallback((item, index) => `${item.id}${index}`, []);

    return (
        <View>
            {/* <Text style={styles.itemType}>Vegetable</Text>
            <Text style={styles.itemType}>Fruit</Text> */}
            <FlatList
                data={products}
                // keyExtractor={(item) => item.id}
                keyExtractor={keyExtractor}
                renderItem={(item) =>renderProductItem(item.item)}
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
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        // height: 70,
        // boxShadow: "0 0 5px rgba(0, 0, 0, 5)",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        margin:20
        // padding: 1,
        // display: "flex",
        // width:"80%"
    },
    
    itemContainer: {
        // flexDirection:'row',
        // alignItems:'center',
        flexWrap:'wrap',
        textAlign:'left'
        // flex: 1,
        // height: 70,
        // boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)"
    },
    itemName :{
        fontSize:30
    },
    itemPrice:{},
    itemType:{},
    separator: {
        height: 5,
        color: "#fff"
    },
    
});