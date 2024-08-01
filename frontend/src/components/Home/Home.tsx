
import { useEffect, useState } from 'react';
import styles from './Home.module.css'
import { fetchListOfCoins } from '../../helpers/api.helper';
import { Modal } from '../Modal/Modal';
import { Coin } from '../../types/coin.type';
import { CoinData } from '../CoinData/CoinData';
import { useDispatch, useSelector } from 'react-redux';
import { changeCoin } from '../../redux/reducers/currentCoinReducer';
import { updateModalState } from '../../redux/reducers/modalReducer';
import { updateCoinList } from '../../redux/reducers/coinListReducer';

function sortCoinBasedOnName(coin1:Coin,coin2:Coin){
 if(coin1.name > coin2.name)
     return 1;
 if(coin1.name < coin2.name)
    return -1;
 return 0;   
}

export function Home(){
    let currentCoin = useSelector((state:any)=>state.currentCoin.coin);

    const changeCurrentCoinDispatch = useDispatch();
    const openModalDispatch = useDispatch();
    const updateListDispatch = useDispatch();
    
    const handleModal =()=>{
        openModalDispatch(updateModalState()); 
    }

    useEffect(()=>{
        (async ()=>{
            let data = await fetchListOfCoins();
            data.sort(sortCoinBasedOnName);
            updateListDispatch(updateCoinList(data));
            if(!currentCoin || Object.keys(currentCoin).length === 0)
              changeCurrentCoinDispatch(changeCoin(data[0]));
        })();
    },[]);
    
    return <div>
        <button className={`${styles.btn}`} onClick={handleModal}>Change</button>
        <CoinData/>
        <Modal />
    </div>;
}