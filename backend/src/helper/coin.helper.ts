import axios from "axios";
import {
  COIN_PRICE_FETCH_URL,
  API_KEY,
  CURRENCY,
  COIN_LIMIT,
} from "../constants";
import { Coin } from "../model/Coin";
import {io} from '../index'

let client = axios.create({
  baseURL: COIN_PRICE_FETCH_URL,
  headers: {
    "content-type": "application/json",
    "x-api-key": API_KEY,
  },
});

// this function fetches latest stock prices
export async function fetchCoinRates() {
  let payload = {
    currency: CURRENCY,
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: COIN_LIMIT,
    meta: true,
  };
  try{
   //fetch and persist
   const response = await client.post("/coins/list", payload); // assumming every time rates for same stocks are returned
   let datoToInsert = response.data.map((coin:any)=>({
    name: coin.name,
    symbol: coin.symbol,
    price: coin.rate,
    currency: CURRENCY,
    color: coin.color, 
    }))
   
   let insertedData = await Coin.insertMany(datoToInsert)

   if(insertedData){
      console.log('coin rates inserted')
      io.emit("fetch")  // emit event so client can fetch the latest stock data
   }  

  }catch(err){
    console.log(err);
  } 
}

export async function consistantRatefetching(){
    setInterval(await fetchCoinRates,5000);
}
