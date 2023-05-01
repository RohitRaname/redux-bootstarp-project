import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import singleProductReducer from "./features/singleProduct/singleProductSlice";
import cartReducer from "./features/cart/cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    product: singleProductReducer,
    cart: cartReducer,
  },
});
