import { View, Text, Pressable } from "react-native";

import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";

//TODO: type this props explicitly
const ListItem: React.FC<any> = ({ item }) => {
  return (
    <Pressable style={ListComponentStylesheet.listItemContainer}>
      <View style={ListComponentStylesheet.listItemHeader}>
        <Text style={ListComponentStylesheet.textBold}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>

      <View style={ListComponentStylesheet.listItemHeader}>
        <Text style={ListComponentStylesheet.textBold}>{item.amount}</Text>
        <Text>{item.date}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
