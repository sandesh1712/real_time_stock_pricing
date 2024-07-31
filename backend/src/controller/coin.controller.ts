import {Request, Response } from 'express';
import { Coin } from '../model/Coin';

export class CoinController {
    async getPriceSingle(req:Request,res:Response){
        const coinName = req.params.name;
        let limit = Number(req.query.limit) ?? 20
        let data = await Coin.find({name: coinName}).sort({createdAt: -1}).limit(limit);
        res.send(data);
    }

    async getListOfStocks(req:Request,res:Response){
        let data = await Coin.find({}).sort({createdAt: -1}).limit(5);
        res.send(data);
    }
}
