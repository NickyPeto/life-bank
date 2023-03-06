import { ScrollView } from "react-native";

import ChartComponent from "../../Components/ChartComponent/ChartComponent";
import InvestmentsBottomTab from "../../Components/InvestmentsBottomTab/InvestmentsBottomTab";
import { useTheme } from "../../Theme/Index";

const Investments: React.FC<any> = () => {
  const { palette } = useTheme();
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        style={{ display: "flex" }}
        contentContainerStyle={{
          justifyContent: "center",
          flex: 1,
          backgroundColor: palette.mainTint,
        }}
      >
        <ChartComponent />
        <InvestmentsBottomTab />
      </ScrollView>
    </>
  );
};

export default Investments;
