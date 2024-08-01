import { createSlice } from "@reduxjs/toolkit"
import { Coin } from "../../types/coin.type";

function storeToLocalStorage(coin:Coin){
   localStorage.setItem('currentCoin',JSON.stringify(coin));
}

function retreiveFromLocalStorage(){
   try{
    const coinString = localStorage.getItem('currentCoin') ?? '{}';
    const coin = JSON.parse(coinString);
    return coin;
   }catch(e){
     return {}
   } 
}

export const currentCoinSLice = createSlice({
    name: 'currentCoin',
    initialState: {
        coin: retreiveFromLocalStorage()
    },
    reducers:{
        changeCoin: (state:any,action)=>{
             state.coin = {...action.payload};
             storeToLocalStorage(state.coin);
        }
    }
})

export const {changeCoin} = currentCoinSLice.actions;
export default currentCoinSLice.reducer;