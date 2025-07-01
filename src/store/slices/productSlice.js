// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
  filter: { category: "all", price: [0, 50000], rating: 0 },
  sort: { condition: "popular", order: 1 },
  pagination: 1,
  allProducts: [],
  productsAfterFilterNSort: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.allProducts = action.payload;
    },
    sortedProducts: (state, action) => {
      state.productsAfterFilterNSort = action.payload;
    },
    filteredProducts: (state, action) => {
      state.productsAfterFilterNSort = action.payload;
    },
  },
});

export const { addProduct, filteredProducts, sortedProducts } =
  productSlice.actions;
export default productSlice.reducer;
