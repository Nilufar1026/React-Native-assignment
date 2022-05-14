import { FlexAlignType, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    type: string
}


export interface IInputField {
    // label?: string;
    placeholder?: string;
    inputOnChange:(t: string) => void
    
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
    handleAdd:()=>void
    
  }

  export interface INewProduct {
  }

  export interface ILogin{
    setIsAuth: (isAuth: boolean) => void;
  }