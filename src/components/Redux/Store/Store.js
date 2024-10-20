import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../ProductsSlice/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
