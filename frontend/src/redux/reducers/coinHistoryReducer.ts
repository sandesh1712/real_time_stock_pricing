import { createSlice } from "@reduxjs/toolkit";

const coinHistorySLice = createSlice({
    name: 'coinHistory',
    initialState:{
        history:[]
    },
    reducers:{
        updateHistory:(state,action)=>{
          state.history = action.payload
        }
    }
})

export const {updateHistory} = coinHistorySLice.actions;
export default coinHistorySLice.reducer;