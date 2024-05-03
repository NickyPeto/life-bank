import { Action, ThunkAction } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface UserInfo {
  name: string;
  surname: string;
  balance?: number;
  transactionsHistory?: Transactions[];
}

export interface Transactions {
  name: string;
  description: string;
  amount: string;
  date: any;
}

export interface UserState {
  loading: boolean;
  userInfo: UserInfo; // for user object
  userToken: string | null; // for storing the JWT
  error: string | null;
  success: boolean; // for monitoring the registration process.
}

export interface Bills {
  data: {
    name: string;
    description: string;
    amount: string;
    date: string;
  };
  createdAt: {
    type: Date;
    default?: Date;
  };
}

export interface RootState {
  user: UserState;
  transactions: Transactions[];
}

//-----------------------Actions----------------------------------//

export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS";
export const FETCH_TRANSACTIONS_FAILURE = "FETCH_TRANSACTIONS_FAILURE";

export interface FetchTransactionSuccessAction {
  type: typeof FETCH_TRANSACTIONS_SUCCESS;
  payload: Transactions[];
}

export interface FetchTransactionFailureAction {
  type: typeof FETCH_TRANSACTIONS_FAILURE;
  payload: string;
}
