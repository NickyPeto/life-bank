import {
  AppThunk,
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_SUCCESS,
  FetchTransactionFailureAction,
  FetchTransactionSuccessAction,
  RootState,
  Transactions,
} from "./types";
import { getTransactions } from "../api/GetTransactions";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransactionSuccess = (
  transactionData: Transactions[]
): FetchTransactionSuccessAction => {
  console.log(transactionData, "in action ");
  return {
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload: transactionData,
  };
};

export const fetchTransactionFailure = (
  error: string
): FetchTransactionFailureAction => ({
  type: FETCH_TRANSACTIONS_FAILURE,
  payload: error,
});

export const fetchTransactions = createAsyncThunk("transactions", () => {
  try {
    const transactions = getTransactions();
    return transactions;
  } catch (e: unknown) {
    fetchTransactionFailure(e as string);
  }
});
