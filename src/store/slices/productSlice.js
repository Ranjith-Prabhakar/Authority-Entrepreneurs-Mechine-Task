// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
  filter: { category: ["all"], price: [0, 50000], rating: 0 },
  sort: { condition: "popular", order: 1 },
  pagination: 0,
  allProducts: [],
  productsAfterFilterNSort: [],
  category: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    sortedProducts: (state, action) => {
      state.productsAfterFilterNSort = action.payload;
    },
    filteredProducts: (state, action) => {
      state.productsAfterFilterNSort = action.payload;
    },
    updatePagination: (state) => {
      state.pagination += 6;
      const newProductsAfterFilterNSort = state.allProducts.slice(
        0,
        state.pagination
      );
      state.productsAfterFilterNSort = newProductsAfterFilterNSort;
    },
  },
});

export const {
  addAllProducts,
  updatePagination,
  setCategory,
  filteredProducts,
  sortedProducts,
} = productSlice.actions;
export default productSlice.reducer;
