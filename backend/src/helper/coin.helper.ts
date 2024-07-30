import axios, { AxiosResponse } from "axios";
import {
  COIN_PRICE_FETCH_URL,
  API_KEY,
  CURRENCY,
  COIN_LIMIT,
} from "../constants";

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
  const response = await client.post("/coins/list", payload);
  console.log(response)
}
