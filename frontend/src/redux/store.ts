import { configureStore } from "@reduxjs/toolkit"
import currentCoinReducer from "./reducers/currentCoinReducer";
import modalRecuder from './reducers/modalReducer';
import coinListReducer from "./reducers/coinListReducer";

export const store = configureStore({
    reducer: {
        currentCoin: currentCoinReducer,
        modal: modalRecuder,
        coinList: coinListReducer
    }
});