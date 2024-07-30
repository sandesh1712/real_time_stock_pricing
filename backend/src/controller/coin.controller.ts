import {Request, Response } from 'express';
import { Coin } from '../model/Coin';

export class CoinController {
    async getPriceSingle(req:Request,res:Response){
        const coinName = req.params.name;
        let data = await Coin.find({name: coinName}).sort({createdAt: -1}).limit(20);
        res.send(data);
    }
}
