// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
  filter: { category: ["all"], price: [0, 50000], rating: 0 },
  sort: { condition: "popular", order: 1 },
  allProducts: [],
  productsAfterFilterNSort: [],
  currentPageProducts: [],
  category: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    productsAfterFilterNSort: (state, action) => {
      state.productsAfterFilterNSort = action.payload;
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
    updatePagination: (state, action) => {
      console.log("inside store", action.payload);
      const lastIndex = action.payload.lastIndex;
      const newcurrentPageProducts = state.productsAfterFilterNSort.slice(
        lastIndex - 6,
        lastIndex
      );
      state.currentPageProducts = newcurrentPageProducts;
    },
  },
});

export const {
  addAllProducts,
  productsAfterFilterNSort,
  updatePagination,
  setCategory,
  filteredProducts,
  sortedProducts,
} = productSlice.actions;
export default productSlice.reducer;
