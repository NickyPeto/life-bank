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

export const fetchTransactions =
  (): AppThunk<void> => async (dispatch, getState: () => RootState) => {
    try {
      const transactions = await getTransactions();
      dispatch(fetchTransactionSuccess(transactions as Transactions[]));
      console.log(getState().transactions, "in thunk");
    } catch (e: unknown) {
      fetchTransactionFailure(e as string);
    }
  };
