import React from 'react';
import { StyleSheet,  View } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import NewProductScreen from '../screens/NewProductScreen';
import { createStackNavigator, Header } from '@react-navigation/stack';


const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <View style={styles.StackContainer}>
            <Stack.Navigator 
           screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: '#F4C3C3', height: 80 },
          }}
>
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="NewProduct" component={NewProductScreen} />
            </Stack.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    StackContainer: {
        flex:1,
        height:280
    }
});

export default StackNavigator