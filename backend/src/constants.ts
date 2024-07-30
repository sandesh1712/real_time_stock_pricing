
export const DB_URL = process.env.MONGO_URL??"";
export const API_KEY = process.env.API_KEY ?? "";
export const COIN_PRICE_FETCH_URL = process.env.COIN_PRICE_FETCH_URL?? "";
export const CURRENCY= process.env.CURRENCY ?? "USD";

export const COIN_LIMIT = parseInt(process.env.COIN_LIMIT??'5');
export const PORT = parseInt(process.env.PORT??'3001')