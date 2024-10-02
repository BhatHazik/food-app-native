import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  name: '',
  phone: '',
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...item, quantity: 1});
      }
    },
    RemoveFromcart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== itemId);
        }
      }
    },
    updateNumber: (state, action) => {
      state.phone = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    Increment: (state, action) => {
      state.count = state.count + 1;
    },
    Decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export const {
  addtocart,
  RemoveFromcart,
  updateNumber,
  updateName,

  Increment,
  Decrement,
} = cartSlice.actions;
export default cartSlice.reducer;
