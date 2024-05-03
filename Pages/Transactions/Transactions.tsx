import { View } from "react-native";

import SearchBar from "../../Components/Searchar/SearchBar";
import ListComponent from "../../Components/ListComponent/ListComponent";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { useTheme } from "../../Theme/Index";
import { useEffect } from "react";
import { RootState } from "../../Redux/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../Redux/Actions";
import { transactionsValuePlceHolder } from "../../Models/DummyData";

const Transactions = (props: any) => {
  const { palette } = useTheme();
  const dispatch = useDispatch<any>();
  const transactionsData = useSelector(
    (state: RootState) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions());
    console.log(transactionsData, " in home");
  }, [dispatch]);

  return (
    <View
      style={[
        GeneralComponentsStylesheet.container,
        { backgroundColor: palette.mainTint },
      ]}
    >
      <SearchBar />
      <ListComponent
        props={transactionsData && transactionsValuePlceHolder}
        hasHeader={false}
      />
    </View>
  );
};

export default Transactions;
