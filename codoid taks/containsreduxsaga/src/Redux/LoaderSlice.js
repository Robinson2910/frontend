import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
    name: "Loader",
    initialState: {
        isLoading: false,
    },
    reducers: {
        getLoaderAction: (state, action) => {
            // console.log(action.payload,"a;ldjasldjsadljsadlkjsadlkj")
            state.isLoading = action.payload;
        },
    }
});

export const {
    getLoaderAction
}=LoaderSlice.actions

export default LoaderSlice.reducer 