import { View, Text, Pressable } from "react-native";

import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";
import { useTheme } from "../../Theme/Index";

//TODO: type this props explicitly
const ListItem: React.FC<any> = ({ item }) => {
  const { palette } = useTheme();
  return (
    <Pressable
      style={[
        ListComponentStylesheet.listItemContainer,
        { backgroundColor: palette.mainUltraLight },
      ]}
    >
      <View style={ListComponentStylesheet.listItemHeader}>
        <Text
          style={[
            ListComponentStylesheet.textBold,
            { color: palette.typographyMain },
          ]}
        >
          {item.title}
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
    </Pressable>
  );
};

export default ListItem;
