import { View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { main } from "../../Stylesheets/ColorPallete";
import { SearchbarStylesheet } from "../../Stylesheets/SearchbarConatainer";

const SearchBar: React.FC<any> = (props) => {
  return (
    <View style={SearchbarStylesheet.container}>
      <Input
        inputContainerStyle={SearchbarStylesheet.inputContainerStyle}
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
