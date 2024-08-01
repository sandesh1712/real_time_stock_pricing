import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:'modal',
    initialState:{
        show:false
    },
    reducers:{
        updateModalState:(state)=>{
            state.show = !state.show;
        }
    }
})

export const {updateModalState} = modalSlice.actions;
export default modalSlice.reducer;