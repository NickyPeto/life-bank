import { FlatList, View, Text } from "react-native";

import ListItem from "./ListItem";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";
import { useTheme } from "../../Theme/Index";
import { useMemo } from "react";

//TODO: type this props explicitly
const ListComponent: React.FC<any> = (props) => {
  const { palette } = useTheme();
  const memoProps = useMemo(() => props.props, [props.props]);

  // useEffect(() => {
  //   cachedArrayData;
  //   console.log(dataArray);
  // }, []);
  // console.log(props.props, "In list component");

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
      {memoProps && (
        <FlatList
          data={memoProps}
          style={{ flex: 1 }}
          contentContainerStyle={{
            backgroundColor: "transparent",
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => {
            console.log(item, "in flatlist itm");
            return <ListItem {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default ListComponent;
