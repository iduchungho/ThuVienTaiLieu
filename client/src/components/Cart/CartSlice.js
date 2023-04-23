import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
    cartTotal: 0,
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check if product is already in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity += quantity;
      }
    },
    removeFromCart(state, action) {
      const idNeedToRemove = action.Payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
    removeQuantityFromCart(state, action) {
      const { id, quantity } = action.payload;
      //check if product is already in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity -= quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    setCartTotal(state, action) {
      state.cartTotal = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
  removeQuantityFromCart,
  clearCart,
  setCartTotal,
} = actions;
export default reducer;
