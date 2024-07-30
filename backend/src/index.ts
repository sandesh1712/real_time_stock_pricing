import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import coinRouter from './routes/coin.route'
import { connectDB } from "./db.config";
import {fetchCoinRates} from './helper/coin.helper';
import { PORT } from './constants';

const app = express();
app.use(cors())

//register route
app.use('/coin',coinRouter)

app.listen(PORT, async ()=>{
  await connectDB();
  await fetchCoinRates();
  console.log("Server started on PORT : ",PORT)
})
