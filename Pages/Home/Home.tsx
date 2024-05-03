import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { homeStyleSheet } from "../../Stylesheets/HomeStylesheet";
import ListComponent from "../../Components/ListComponent/ListComponent";

import { useTheme } from "../../Theme/Index";

import HomeHeader from "./home-header/HomeHeader";
import HomeIconTab from "./home-icon-tab/HomeIconTab";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/types";
import { fetchTransactions } from "../../Redux/Actions";
import { transactionsValuePlceHolder } from "../../Models/DummyData";

const Home: React.FC<any> = () => {
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
    <SafeAreaView
      style={[
        GeneralComponentsStylesheet.lightTheme,
        { backgroundColor: palette.mainTint },
      ]}
    >
      <HomeHeader />
      <View style={homeStyleSheet.homeTabContainer}>
        <HomeIconTab props={transactionsData} />
        <ListComponent
          props={transactionsData && transactionsValuePlceHolder}
          hasHeader={true}
          a
          header={"Latest Transactions"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
