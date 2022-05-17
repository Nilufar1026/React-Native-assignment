import { FlexAlignType } from "react-native";

export interface IProduct {
    id: string;
    name: string;
    price: string;
    type: string;
}

export interface IProducts  {
 products:IProduct[]
 setProducts:(p:IProduct[])=>void
}


export interface IInputField {
    placeholder?: string;
    inputOnChange:(t: string) => void;
    secureTextEntry:boolean
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
    onClose:()=>void;
    addProduct:(p:IProduct)=>void;
    showModal:boolean;
  }

  export interface IOwnProduct{
  }

  export interface ILogin{
    setIsLogged:(b:boolean)=>void
  }

  export interface ISignUp {
    onClose:()=>void;
  }

  export interface IBottomTab {
    setIsLogged:(p:boolean)=>void
}