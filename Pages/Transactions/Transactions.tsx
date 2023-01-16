import { View } from "react-native";

import SearchBar from "../../Components/Searchar/SearchBar";
import ListComponent, {
  data,
} from "../../Components/ListComponent/ListComponent";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

const Transactions = (props: any) => {
  return (
    <View style={GeneralComponentsStylesheet.container}>
      <SearchBar />
      <ListComponent props={data} hasHeader={false} />
    </View>
  );
};

export default Transactions;
