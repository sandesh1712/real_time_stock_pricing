import { createSlice } from "@reduxjs/toolkit";

const coinlistSlice = createSlice({
    name:'coinList',
    initialState:{
        list:[]
    },
    reducers:{
        updateCoinList:(state,action)=>{
            state.list = action.payload
        }
    }
})

export const {updateCoinList} = coinlistSlice.actions;

export default coinlistSlice.reducer;