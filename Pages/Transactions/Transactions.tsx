import { View } from "react-native";
import SearchBar from "../../Components/Searchar/SearchBar";
import ListComponent, {
  data,
} from "../../Components/ListComponent/ListComponent";

const Transactions = (props: any) => {
  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "flex-start",
      }}
    >
      <SearchBar />
      <ListComponent props={data} hasHeader={false} />
    </View>
  );
};

export default Transactions;
