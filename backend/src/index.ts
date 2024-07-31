import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import coinRouter from './routes/coin.route'
import { connectDB } from "./db.config";
import {consistantRatefetching} from './helper/coin.helper';
import { PORT } from './constants';
import { Server} from 'socket.io';
import { createServer } from 'http';

const app = express();
app.use(cors())

const server = createServer(app)
//create socket 
export const io = new Server(server);

// when a client connects
io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle disconnection
  socket.on('disconnect', () => {
      console.log('User disconnected');
  });
});

//register route
app.use('/coin',coinRouter)

server.listen(PORT, async ()=>{
  await connectDB();
  console.log("Server started on PORT : ",PORT)
  consistantRatefetching()
})