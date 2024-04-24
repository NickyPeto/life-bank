import axios from "axios";
import { Transactions } from "../Redux/types";

export const getTransactions: () => Promise<
  Transactions[] | undefined
> = async () => {
  try {
    console.log(process.env.REACT_APP_API_URL);
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/transactions`
    );

    const newHistoryArray: Transactions[] = res.data.transactions.map(
      (item: any) => item.data.history
    );
    return [...newHistoryArray];
  } catch (e: any) {
    console.log(e, "is the error form api");
  }
};
