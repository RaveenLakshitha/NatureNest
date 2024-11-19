import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{cartItems:[], cartItemsCount:0, disabledItems:[]},
    reducers:{
        addToCart : (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.cartItems.push({...action.payload, quantity:1, cartPrice:action.payload.itemPrice});
                state.cartItemsCount += 1;
            }
        },
        removeFromCart : (state, action) => {
            state.cartItemsCount -= action.payload.quantity;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        clearCart : (state) => {
            state.disabledItems = [];
            state.cartItems = [];
            state.cartItemsCount = 0;
        },
        updateQuantity : (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.item.id);
            if(action.payload.operation === "increase"){
                state.cartItemsCount += 1;
                if(existingItem){
                    existingItem.quantity += 1;
                    existingItem.cartPrice = existingItem.quantity * existingItem.itemPrice;
                }
            }
            else if(action.payload.operation === "decrease" && action.payload.item.quantity > 1){
                state.cartItemsCount -= 1;
                if(existingItem && existingItem.quantity > 0){
                    existingItem.quantity -= 1;
                    existingItem.cartPrice = existingItem.quantity * existingItem.itemPrice;
                }
            }
        },

        updateDisabledItems : (state, action) => {
            if(action.payload.switchType){
                state.disabledItems.push(action.payload.itemId);
            }else{
                state.disabledItems = state.disabledItems.filter(item => item !== action.payload.itemId);
            }
        }
    }
}
);

export const {addToCart, removeFromCart, clearCart, updateQuantity, updateDisabledItems} = cartSlice.actions;
export default cartSlice.reducer;