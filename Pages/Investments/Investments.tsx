import { ScrollView } from "react-native";

import ChartComponent from "../../Components/ChartComponent/ChartComponent";
import InvestmentsBottomTab from "../../Components/InvestmentsBottomTab/InvestmentsBottomTab";

const Investments: React.FC<any> = () => {
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        style={{ display: "flex" }}
        contentContainerStyle={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ChartComponent />
        <InvestmentsBottomTab />
      </ScrollView>
    </>
  );
};

export default Investments;
