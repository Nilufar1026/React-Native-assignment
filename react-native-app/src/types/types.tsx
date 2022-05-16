import { FlexAlignType, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    type: string;
}

export interface IProducts  {
 products:IProduct[]
 setProducts:(p:any)=>void
}


export interface IInputField {
    // label?: string;
    placeholder?: string;
    inputOnChange:(t: string) => void;
    secureTextEntry:any
    
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
    borderWidth:number
    
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

  export interface ILogin{
    setIsLogged:(b:boolean)=>void
  }

  export interface ISignUp {
    onClose:()=>void;
  }