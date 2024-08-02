import { configureStore } from "@reduxjs/toolkit"
import currentCoinReducer from "./reducers/currentCoinReducer";
import modalRecuder from './reducers/modalReducer';
import coinListReducer from "./reducers/coinListReducer";
import coinHistoryReducer from './reducers/coinHistoryReducer';

export const store = configureStore({
    reducer: {
        currentCoin: currentCoinReducer,
        modal: modalRecuder,
        coinList: coinListReducer,
        coinHistory: coinHistoryReducer
    }
});