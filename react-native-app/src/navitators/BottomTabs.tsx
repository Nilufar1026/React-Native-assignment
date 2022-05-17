
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from '../screens/ProductScreen';
import SettingScreen from '../screens/SettingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { IBottomTab } from '../types/types';

const Tab = createBottomTabNavigator();
const BottomTabs:React.FC<IBottomTab> = ({setIsLogged}:IBottomTab) => {
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
                }} 
                
                />
            <Tab.Screen name="Setting" children={() =><SettingScreen setIsLogged={setIsLogged} />}
            options={{

                tabBarIcon: ({ color }) => (
                    <AntDesign name="setting" size={24} color="black" />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs