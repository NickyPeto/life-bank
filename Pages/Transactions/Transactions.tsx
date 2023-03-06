import { View } from "react-native";

import SearchBar from "../../Components/Searchar/SearchBar";
import ListComponent, {
  data,
} from "../../Components/ListComponent/ListComponent";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { useTheme } from "../../Theme/Index";

const Transactions = (props: any) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        GeneralComponentsStylesheet.container,
        { backgroundColor: palette.light },
      ]}
    >
      <SearchBar />
      <ListComponent props={data} hasHeader={false} />
    </View>
  );
};

export default Transactions;
