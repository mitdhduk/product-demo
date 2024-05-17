import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductDetailsAPI, getProductsAPI } from "./productAPI";

const initialState = {
    loading: false,
    data: {},
    productDetails: {
        loading: false,
        data: {}
    }
}


export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
    try {
        const response = await getProductsAPI()
        if (response?.status == 200) {
            return response.data
        }
    } catch (error) {
        console.log(error.message);
    }
})


export const getProductDetails = createAsyncThunk("product/getProductDetails", async (productId) => {
    try {
        const response = await getProductDetailsAPI(productId)
        if (response && response?.status == 200) {
            return response.data
        }
    } catch (error) {
        console.log(error.message);
    }
})


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        }).addCase(getProductDetails.pending, (state) => {
            state.productDetails.loading = true
        }).addCase(getProductDetails.fulfilled, (state, action) => {
            state.productDetails.loading = false
            state.productDetails.data = action.payload
        })
    }
})
export default productSlice.reducer