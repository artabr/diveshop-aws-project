import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../data/types';

type CartItem = Pick<Product, 'itemId' | 'itemPrice'> & {
  itemQuantity: number;
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    }
  }
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
