
import { createContext, useContext, useReducer } from "react";
import products from "../Component/ProductData";
import { cartReducer, productReducer } from "./Reducer";
const Cart = createContext();

const Context= ({children}) =>{

    const product= products.map((item)=>({
        id:item.id,
        name:item.name,
        description:item.description,
        price:item.price,
        old_price: item.old_price,
        currency:item.currency,
        image:item.image, 
        catagory:item.category,
        inStock: item.inStock,
        fastDelivery: item.fastDelivery,
        HomeCategory:item.HomeCategory,
        
    }));
    
    
    const [state, dispatch] = useReducer(cartReducer, {
        products:product,
        cart:[],
    });
   
   

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        searchQuery: "",
      });


      return(
        <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
            {children}
        </Cart.Provider>
    );

}
export const CartState =()=>{
    return useContext(Cart);
};

export default Context;