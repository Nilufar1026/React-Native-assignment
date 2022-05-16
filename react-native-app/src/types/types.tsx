import { FlexAlignType, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    type: string;
}

export interface IProducts  {
 products:IProduct[]
}


export interface IInputField {
    // label?: string;
    placeholder?: string;
    inputOnChange:(t: string) => void;
    name:string;
    
    
    // error?: boolean;
    // errorMessage?: React.ReactNode;
    // disabled?: boolean;
    // multiline?: boolean;
    // accessibilityLabel: string;
    // type?: "text" | "password" | "email" | "number" | "phone";
    // fullWidth?: boolean;
    // returnButtonType?: "done" | "go" | "next" | "search" | "send";
    // description?: string;
  }
  
  export interface IButton {
    width:number;
    height:number;
    borderRadius:number;
    marginTop:number;
    ButtonText:string  
    alignItems: FlexAlignType | undefined
    fontSize:number;
    handleAdd:()=>void;
    
  }

  export interface INewProduct {
    // onOptionPress:boolean
    // onProfilePress:any
    onClose:()=>void;
    addProduct:any;
    showModal:boolean;
    // setShowModal:any
  }

  export interface IOwnProduct{
    // navigation:any;
    // showModal:boolean
    // onClose:()=>void;
    // addProduct:any
  }