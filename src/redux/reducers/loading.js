import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name:"loading",
    initialState:{
        loadingStatus:true
    },
    reducers:{
        SET_LOADING(state,action){
            state.loadingStatus = action.payload
        }
    }
})
export const {SET_LOADING} = loadingSlice.actions

export default loadingSlice.reducer