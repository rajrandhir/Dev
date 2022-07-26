import { createSlice } from "@reduxjs/toolkit";

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
      }
    },
     
    remove: (state, action) => {
      const nextCartItem = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = nextCartItem;
    },
  },
});
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
