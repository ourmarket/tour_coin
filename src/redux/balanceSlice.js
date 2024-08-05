// redux/balanceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    amountBNB: 0,
    amountTRC: 0,
    account: null,
    tokenBalance: null,
    bnbBalance: null,
    web3: null,
  },
  reducers: {
    setAmountBNB(state, action) {
      state.amountBNB = action.payload;
    },
    setAmountTRC(state, action) {
      state.amountTRC = action.payload;
    },
    setWeb3(state, action) {
      state.web3 = action.payload;
    },
    setAccount(state, action) {
      state.account = action.payload;
    },
    setTokenBalance(state, action) {
      state.tokenBalance = action.payload;
    },
    setBnbBalance(state, action) {
      state.bnbBalance = action.payload;
    },
    clearBalances(state) {
      state.amountBNB = 0;
      state.amountTRC = 0;
      state.account = null;
      state.tokenBalance = null;
      state.bnbBalance = null;
      state.web3 = null;
    },
  },
});

export const {
  setWeb3,
  setAccount,
  setTokenBalance,
  setBnbBalance,
  clearBalances,
  setAmountBNB,
  setAmountTRC,
} = balanceSlice.actions;

export default balanceSlice.reducer;
