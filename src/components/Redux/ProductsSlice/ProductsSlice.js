import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      return res.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productsSlice.reducer;
