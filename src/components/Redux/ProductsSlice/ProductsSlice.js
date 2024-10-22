import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "Products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
