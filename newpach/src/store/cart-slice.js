import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    replace(state,actions){
      state.items=actions.payload.items||[]
      state.totalQuantity=actions.payload.totalQuantity
    },
    addItem(state, actions) {
      const addItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === addItem.id);
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          id:addItem.id,
          price: addItem.price,
          quantity: 1,
          totalPrice: addItem.price,
          name: addItem.title,
        });
      }else{
        existingItem.quantity++
        existingItem.totalPrice=existingItem.totalPrice+addItem.price
      }
    },
    removeItem(state,actions){
    const id = actions.payload;
    const existingItem = state.items.find((item) => item.id === id);
   state.totalQuantity--
    if (existingItem.quantity===1){
        state.items=state.items.filter(item=>item.id!==id)
    }else{
        existingItem.quantity--
        existingItem.totalPrice=existingItem.totalPrice-existingItem.price
    }
    }
  },
});

export default cart;
export const cartAction = cart.actions;
