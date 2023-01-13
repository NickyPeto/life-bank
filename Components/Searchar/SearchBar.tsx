import { View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { lightGray, main } from "../../Stylesheets/ColorPallete";

const SearchBar: React.FC<any> = (props) => {
  //TODO: move style to stylesheets
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
      }}
    >
      <Input
        inputContainerStyle={{
          backgroundColor: lightGray,
          borderBottomWidth: 0,
          borderRadius: 10,
          opacity: 0.6,
        }}
        inputStyle={{
          color: main,
        }}
        placeholder="Search"
        leftIcon={{
          type: "ionicon",
          name: "search",
          color: main,
          size: 20,
          style: { textAlign: "center", paddingLeft: 10 },
        }}
      />
      <Icon
        name="ios-filter"
        type="ionicon"
        color={main}
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          paddingBottom: 20,
        }}
      />
    </View>
  );
};

export default SearchBar;
