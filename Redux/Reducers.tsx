import { configureStore, createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  name: string;
  surname: string;
  balance?: number;
  transactionsHistory?: [];
}

interface UserState {
  loading: boolean;
  userInfo: UserInfo; // for user object
  userToken: string | null; // for storing the JWT
  error: string | null;
  success: boolean; // for monitoring the registration process.
}

const initialState: UserState = {
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

const userReducer = userSlice.reducer;

export default userReducer;
