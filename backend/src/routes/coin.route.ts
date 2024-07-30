import {Router} from 'express';
import { CoinController } from '../controller/coin.controller';

let coinRouter = Router();
let coinController = new CoinController();
coinRouter.get('/:name',(req,res)=>coinController.getPriceSingle(req,res));
export default coinRouter;