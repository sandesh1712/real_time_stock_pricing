import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import coinRouter from './routes/coin.route'
import { connectDB } from "./db.config";
import {consistantRatefetching} from './helper/coin.helper';
import { PORT } from './constants';
import SSE from 'express-sse-ts';

export const sse = new SSE();

const app = express();
app.use(cors())

//register route
app.use('/coin',coinRouter)

//router for stream
app.get('/stream',sse.init);

app.listen(PORT, async ()=>{
  await connectDB();
  console.log("Server started on PORT : ",PORT)
  consistantRatefetching()
})