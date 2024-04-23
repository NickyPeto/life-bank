import { FlatList, View, Text } from "react-native";

import ListItem from "./ListItem";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";
import { useTheme } from "../../Theme/Index";

//TODO: type this props explicitly
const ListComponent: React.FC<any> = (props) => {
  const { palette } = useTheme();

  // useEffect(() => {
  //   cachedArrayData;
  //   console.log(dataArray);
  // }, []);

  return (
    <View
      style={[
        ListComponentStylesheet.listComponent,
        { backgroundColor: palette.shortcutsBtn },
      ]}
    >
      <View style={ListComponentStylesheet.listComponentWrapper}>
        {props.hasHeader ? (
          <>
            <Text
              style={[
                typographyStylesheet.typographyBold,
                { color: palette.headerMain },
              ]}
            >
              {props.header}
            </Text>
          </>
        ) : null}
      </View>
      {props.props && props.length > 1 && (
        <FlatList
          data={props.props}
          style={{ flex: 1 }}
          contentContainerStyle={{
            backgroundColor: "transparent",
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => {
            console.log(item, "in flatlist");
            return <ListItem {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default ListComponent;
