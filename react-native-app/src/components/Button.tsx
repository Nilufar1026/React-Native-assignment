
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    productContainer: {
      flexDirection: 'column',
      backgroundColor: '#f1f1f1',
      flex: 1
    },
    addWrapper: {
      alignItems: props.alignItems,
      marginRight: 10,
      
      
    },
    addButton: {
      width: props.width,
      backgroundColor: "#fff",
      borderRadius: props.borderRadius,
      height: props.height,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: props.marginTop,
      borderWidth:props.borderWidth,
    
    },
    addText: {
      fontSize: props.fontSize,
      fontWeight:'bold'
    }
  });

  export default StyledButton