import { View } from "react-native";

import SearchBar from "../../Components/Searchar/SearchBar";
import ListComponent from "../../Components/ListComponent/ListComponent";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { useTheme } from "../../Theme/Index";

const Transactions = (props: any) => {
  const { palette } = useTheme();
  console.log(props.route.params);
  return (
    <View
      style={[
        GeneralComponentsStylesheet.container,
        { backgroundColor: palette.mainTint },
      ]}
    >
      <SearchBar />
      {props.route.params.props && (
        <ListComponent props={props.route.params.props} hasHeader={false} />
      )}
    </View>
  );
};

export default Transactions;
