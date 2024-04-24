import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_SUCCESS,
  Transactions,
  UserState,
} from "./types";
import { fetchTransactionFailure, fetchTransactionSuccess } from "./Actions";

const userInitialState: UserState = {
  loading: false,
  userInfo: {
    name: "",
    surname: "",
    balance: 0,
    transactionsHistory: [],
  },
  userToken: null,
  error: null,
  success: false,
};

const transactionInitialState: Transactions[] = [
  {
    name: "",
    date: "",
    description: "",
    amount: "",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: () => {},
});

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionInitialState,
  reducers: {
    [FETCH_TRANSACTIONS_SUCCESS]: (
      state,
      action: PayloadAction<Transactions[]>
    ) => {
      console.log(action.payload, state, "in reducer ");
      return action.payload;
    },
    [FETCH_TRANSACTIONS_FAILURE]: (state, action: PayloadAction<string>) => {},
  },
});

const userReducer = userSlice.reducer;
const transactionsReducer = transactionsSlice.reducer;

const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
