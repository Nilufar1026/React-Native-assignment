import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Products from './Products';
import { IButton } from '../types/types';

 const StyledButton: React.FC<IButton> = (props) =>{
  return (
      <TouchableOpacity style={styles(props).addWrapper} onPress={props.handleAdd}>
        <View style={styles(props).addButton}>
          <Text style={styles(props).addText}>{props.ButtonText}</Text>
        </View>
      </TouchableOpacity>
  )
}


const styles = (props:IButton) => StyleSheet.create({
    addWrapper: {
      alignItems: props.alignItems,
    },
    addButton: {
      marginRight: 10,
      borderWidth:3,
      width: props.width,
      backgroundColor: "#fff",
      borderRadius: props.borderRadius,
      height: props.height,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: props.marginTop,
      
    },
    addText: {
      fontSize: props.fontSize
    }
  });

  export default StyledButton