import { View, Text, SliderComponent, Pressable } from "react-native";
import { mainLighter, mainUltraLight } from "../../Stylesheets/ColorPallete";

const ListItem: React.FC<any> = ({ item }) => {
  //TODO: Move to stylsheets
  return (
    <Pressable
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: mainUltraLight,
        borderRadius: 20,
        flexDirection: "row",
        height: 70,
        margin: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 20,
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "left" }}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
          paddingRight: 20,
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "right" }}>
          {item.amount}
        </Text>
        <Text>{item.date}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
