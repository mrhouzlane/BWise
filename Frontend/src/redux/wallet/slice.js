import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: 0,
    connected: false,
}

const walletSlice = createSlice({
   name: 'wallet',
   initialState,
   reducers: {
    setWallet: (state, action) => {
        state.address = action.payload.address;
        state.connected = true;
    }
   } 
});

export const { setWallet } = walletSlice.actions;

export default walletSlice.reducer;