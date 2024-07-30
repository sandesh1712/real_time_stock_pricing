import 'dotenv/config'
import { connectDB } from "./db.config";
import {fetchCoinRates} from './helper/coin.helper';

connectDB();
// let coin = Coin.create({
//     symbol: "DOGE",
//     currency: "USD",
//     price: 23459,
//     color:'#ffssdd'
// })

//console.log(coin)

fetchCoinRates();