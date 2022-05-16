import React from 'react';
import { StyleSheet,  View } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import NewProductScreen from '../screens/NewProductScreen';
import { createStackNavigator, Header } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';


const Stack = createStackNavigator();
const StackNavigator = () => {
//     return (
//         <View style={styles.StackContainer}>
//             <Stack.Navigator 
//            screenOptions={{
//             headerShown: false,
           
//           }}
// >
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="SignUp" component={SignUp} />
//                 {/* <Stack.Screen name="Product" component={ProductScreen} /> */}
//             </Stack.Navigator>
//         </View>
//     )
}

const styles = StyleSheet.create({
    StackContainer: {
        flex:1,
        height:280
    }
});

export default StackNavigator