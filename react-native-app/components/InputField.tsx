
import React, { useRef, useState} from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { IInputField } from "../types/types";


const InputField: React.FC<IInputField & TextInputProps> = (props) => {
    
  return (
      
      <View style={styles.inputFieldContainer}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" :"height"}
            >
            <TextInput placeholder={props.placeholder}  
            value={props.value}
            onChangeText={props.inputOnChange}
            {...props.keyboardType ? 'numric' : null}
            style={styles.input}
            />
      </KeyboardAvoidingView>
        </View>
)};

const styles = StyleSheet.create({
    inputFieldContainer:{},
    input:{
        width:350,
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'#fff',
        borderRadius:60,
        borderColor:'#c0c0c0',
        borderWidth:1,
        margin:15
    }
    
});

export default InputField;