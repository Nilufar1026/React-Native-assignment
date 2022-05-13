import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from '../screens/ProductScreen';
import SettingScreen from '../screens/SettingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import NewProductScreen from '../screens/NewProductScreen';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
interface IProps {

}

const BottomTabs: React.FC<IProps> = () => {
    return (
        <Tab.Navigator
            initialRouteName="Product"
            
            // tabBarOptions={{
            //     style: { backgroundColor: Color.grey },
            //     showLabel: false,
            //     activeTintColor: Color.primaryDark,
            //     inactiveTintColor: Color.inactive,
            //   }}
            screenOptions={{
                
                tabBarStyle: {backgroundColor: "#f1f1f1",position:'absolute'},
                tabBarActiveBackgroundColor:'#F4C3C3',
                tabBarInactiveTintColor:'black',
                tabBarActiveTintColor:'black',
                headerStyle:{backgroundColor:'#F4C3C3'},
                tabBarHideOnKeyboard:true
            }}
            // activeColor="red"
            // inactiveColor="white"
            // activeBackgroundColor="green"
            // inactiveBackgroundColor="green"
            // style={{ backgroundColor: 'green' }}
            // tabBarOptions={{
            //     style: {
            //         backgroundColor: 'green'
            //     }
            // }}
        >
            <Tab.Screen name="Product" component={ProductScreen}
        
                options={{

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="fruit-cherries" size={24} color="black" />
                    ),
                }} />
            <Tab.Screen name="New Product" component={NewProductScreen} 
             options={{

                tabBarIcon: ({ color }) => (
                    <Entypo name="add-to-list" size={24} color="black" />
                ),
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