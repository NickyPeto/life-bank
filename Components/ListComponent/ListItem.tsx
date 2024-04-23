import { View, Text, Pressable } from "react-native";

import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";
import { useTheme } from "../../Theme/Index";
import React from "react";

//TODO: type this props explicitly
const ListItem: React.FC<any> = ({ item }) => {
  const { palette } = useTheme();
  console.log(item, "in item");

  return (
    <Pressable
      style={[
        ListComponentStylesheet.listItemContainer,
        { backgroundColor: palette.mainUltraLight },
      ]}
    >
      <React.Fragment>
        <View style={ListComponentStylesheet.listItemHeader}>
          <Text
            style={[
              ListComponentStylesheet.textBold,
              { color: palette.typographyMain },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              ListComponentStylesheet.textCaption,
              { color: palette.typographyMain },
            ]}
          >
            {item.description}
          </Text>
        </View>
        <View style={ListComponentStylesheet.listItemHeader}>
          <Text
            style={[
              ListComponentStylesheet.textBold,
              { color: palette.typographyMain },
            ]}
          >
            {item.amount}
          </Text>
          <Text
            style={[
              ListComponentStylesheet.textCaption,
              { color: palette.typographyMain },
            ]}
          >
            {item.date}
          </Text>
        </View>
      </React.Fragment>
      {/* {dataArray &&
        dataArray.map((item: any, index: number) => {
          console.log(item.amount, "in map");
          return (
   
          );
        })} */}
    </Pressable>
  );
};

export default ListItem;
