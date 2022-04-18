import { createAsyncThunk } from "@reduxjs/toolkit";




export const productList = createAsyncThunk("Product/productList", async () => {
  try {
    const response = await fetch("http://localhost:5000/products");
    return response;
  } catch (error) {
   return error.response && error.response.data.message ? error.response.data.message : error.message
  }
});
