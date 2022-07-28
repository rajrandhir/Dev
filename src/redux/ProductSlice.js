import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
  
});
const productSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//toolkit thunk
export const fetchProduct = createAsyncThunk("productss/fetch", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
