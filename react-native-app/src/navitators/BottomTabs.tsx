import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from '../screens/ProductScreen';
import SettingScreen from '../screens/SettingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();



const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Product"
            screenOptions={{
                
                tabBarStyle: {backgroundColor: "#f1f1f1",position:'absolute'},
                tabBarActiveBackgroundColor:'#F4C3C3',
                tabBarInactiveTintColor:'black',
                tabBarActiveTintColor:'black',
                headerStyle:{backgroundColor:'#F4C3C3'},
                tabBarHideOnKeyboard:true
                
            }}
        >
            <Tab.Screen name="ProductScreen" component={ProductScreen}
        
                options={{

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="fruit-cherries" size={24} color="black" />
                    ),
                    title:"Product",
                    header: () => null,
                }} 
                
                />
            <Tab.Screen name="Setting" component={SettingScreen} 
            options={{

                tabBarIcon: ({ color }) => (
                    <AntDesign name="setting" size={24} color="black" />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});

export default BottomTabs