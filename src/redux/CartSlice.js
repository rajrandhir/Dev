import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems:[],
    cartTotalQuantity: 0,

  },
  reducers: {
    add: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if(itemIndex >= 0){ 
        state.cartItems[itemIndex].cartQuantity += 1;
      }else{
        const tempProduct = {...action.payload, cartQuantity:1}
        state.cartItems.push(tempProduct)
        toast.success("Added product to cart successfully!!")
      }
    },
     
    remove: (state, action) => {
      const nextCartItem = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = nextCartItem;
      toast.warning("Remove product from cart successfully!!");
    },
    decreaseCartItem: (state, action) =>{
      const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("decrease product quantity!!")
      }
    },
  },
});
export const { add, remove,increaseCartItem,decreaseCartItem } = CartSlice.actions;
export default CartSlice.reducer;
