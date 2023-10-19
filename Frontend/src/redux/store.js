import { configureStore } from "@reduxjs/toolkit";
import wallet from './wallet/slice.js'

export const store = configureStore({
    reducer: {
        wallet,
    }
});