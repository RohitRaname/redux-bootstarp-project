import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { single_product_url } from "../../utils/constants";

const initialState = {
  isLoading: false,
  product: null,
};

export const getProduct = createAsyncThunk(
  "/product/getProduct",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`${single_product_url}${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    clearProduct: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { showLoading, hideLoading, clearProduct } =
  singleProductSlice.actions;

export default singleProductSlice.reducer;
