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
        <Text style={ListComponentStylesheet.textBold}>{item.title}</Text>
        <Text style={ListComponentStylesheet.textCaption}>
          {item.description}
        </Text>
      </View>

      <View style={ListComponentStylesheet.listItemHeader}>
        <Text style={ListComponentStylesheet.textBold}>{item.amount}</Text>
        <Text style={ListComponentStylesheet.textCaption}>{item.date}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
