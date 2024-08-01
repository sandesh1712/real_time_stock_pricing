import axios from "axios";

let API_URL = process.env.REACT_APP_API_URL

let client = axios.create({
    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
        'accept' : 'application/json'
    }
})

export const fetchListOfCoins = async () => {
   let res = await client.get('/coin/list');
   return res.data;
}

export const fetchSingle = async (name:String) => {
    let res = await client.get(`/coin/${name}?limit=20`);
    return res.data;
 }