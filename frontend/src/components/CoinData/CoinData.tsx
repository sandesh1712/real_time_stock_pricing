import { useEffect, useState } from "react";
import { Coin } from "../../types/coin.type";
import { fetchSingle } from "../../helpers/api.helper";
import styles from './CoinData.module.css'
import { useSelector } from "react-redux";

function getCurrencySign(currency:string){
  switch(currency){
    case "USD":
         return '$'
    default :
        return  '$'    
  }
}

function padZero(num:number){
  if(num < 10)
    return `0${num}`
  return num.toString();
}

const apiUrl = process.env.REACT_APP_API_URL??'';
let es = new EventSource(apiUrl+'/stream');

export function CoinData(){
  const currentCoin = useSelector((state:any)=>state.currentCoin.coin);
   
  const [coinHistory,setCoinHistory] = useState([]);

  const fetchHistory = async ()=>{
    let data = await fetchSingle(currentCoin.name);
    setCoinHistory(data);
   }
  
  useEffect(()=>{
     fetchHistory();
     es.onmessage = async (event)=>{
       await fetchHistory();
     }
  },[currentCoin])

  return coinHistory.length > 0 ? (<div>
    <h1>{currentCoin.name} {currentCoin.symbol}</h1>
    <table className={styles.table} border={0}>
        <thead>
            <tr>
             <th>Price</th>
             <th>Time</th>
            </tr> 
        </thead>
        <tbody>
          {coinHistory.map((coin:Coin,index)=>{
            let dateTime = new Date(coin.createdAt)
            let timeString = `${padZero(dateTime.getHours())} : ${padZero(dateTime.getMinutes())} : ${padZero(dateTime.getSeconds())}`
            return <tr key={`${coin.name}${index}`} className={`${styles.row} ${ index%2===0 ? styles.row_grey : styles.row_beige }`}>
                <td>{getCurrencySign(coin.currency)}{coin.price.toFixed(2)}</td>
                <td>{timeString}</td>
            </tr>
          })}
        </tbody>
   </table>
   </div>)
  :
   (
    <div>
        <h1>Error occured while fetching coin data</h1>
    </div>
   )
}