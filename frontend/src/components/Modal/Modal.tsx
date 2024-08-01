import styles from './Modal.module.css'
import {Coin} from '../../types/coin.type';
import { useDispatch, useSelector } from 'react-redux';
import { changeCoin } from '../../redux/reducers/currentCoinReducer';
import { updateModalState } from '../../redux/reducers/modalReducer';

export function Modal(){
  const isModalOpen =useSelector((state:any)=> state.modal.show)
  const list = useSelector((state:any)=>state.coinList.list);
  const changeCurrentCoin = useDispatch();
  const closeModal = useDispatch();


  function handleSelect(coin:Coin){
        changeCurrentCoin(changeCoin(coin));
        closeModal(updateModalState());
  }

  return (isModalOpen? <div className={styles.container}>
      <div>
        <h1>Change Coin</h1>
      </div>
      <div>
        {list.map((coin:any,index:number)=>{
            return <div key={index+coin.name} className={styles.coin} onClick={()=>handleSelect(coin)}>
                <p>{coin.name} {coin.symbol}</p>
            </div>
        })}
      </div>
  </div> :
   null
  )
}