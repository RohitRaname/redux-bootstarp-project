import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQty: 0,
};

// when req is fetche isLoading true

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const { id,color, stock, qty } = payload;
      const item = state.cart.find((item) => item.id === id+color);

      if (!item) {
        state.cart.push({ ...payload, id: payload.id + payload.color });
        return state;
      }

      // if item exist
      let newQty = item.qty + qty;
      if (newQty > stock) newQty = stock;
      item.qty = newQty;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((cart) => cart._id !== payload.id);
    },
    toggleCartItemQty: (state, { payload }) => {
      const { id, type } = payload;
      const item = state.cart.find((item) => item.id === id);
      const curQty = item.qty;
      let newQty = type === "increase" ? curQty + 1 : curQty - 1;
      if (newQty > item.stock) newQty = item.stock;
      else if (newQty === 0) newQty = 1;
      item.qty = newQty;
    },

    calculateTotals: (state) => {
      const { totalPrice, totalQty } = state.cart.reduce(
        (acc, item) => {
          acc.totalPrice += item.qty * item.price;
          acc.totalQty += item.qty;
          return acc;
        },
        { totalPrice: 0, totalQty: 0 }
      );

      state.totalPrice = totalPrice;
      state.totalQty = totalQty;
    },

    clearCart: (state) => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, toggleCartItemQty, calculateTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
