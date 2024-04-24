import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_SUCCESS,
  Transactions,
  UserState,
} from "./types";
import {
  fetchTransactionFailure,
  fetchTransactions,
  fetchTransactionSuccess,
} from "./Actions";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      // Update state with fetched transactions when async operation is successful
      return action.payload;
    });
    // Handle other action types if needed
  },
});

const userReducer = userSlice.reducer;
const transactionsReducer = transactionsSlice.reducer;

const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
