import { View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { SearchbarStylesheet } from "../../Stylesheets/SearchbarConatainer";
import { useTheme } from "../../Theme/Index";

const SearchBar: React.FC<any> = (props) => {
  const { palette } = useTheme();
  return (
    <View style={SearchbarStylesheet.container}>
      <Input
        inputContainerStyle={[
          SearchbarStylesheet.inputContainerStyle,
          { backgroundColor: palette.lightGray },
        ]}
        inputStyle={{
          color: palette.typographyMain,
        }}
        placeholder="Search"
        leftIcon={{
          type: "ionicon",
          name: "search",
          color: palette.main,
          size: 20,
          style: { textAlign: "center", paddingLeft: 10 },
        }}
      />
      <Icon
        name="ios-filter"
        type="ionicon"
        color={palette.main}
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
