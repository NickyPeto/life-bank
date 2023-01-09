import { main } from "../ColorPallete";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { CustomTabProps } from "../../Models/SharedProps";

export const TabComponent: React.FC<CustomTabProps> = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
      }}
    >
      <View style={{ flex: 1 }}>
        <Button
          title={"Login"}
          titleStyle={{ color: main }}
          buttonStyle={
            props.active
              ? GeneralComponentsStylesheet.tabButtonLeft
              : GeneralComponentsStylesheet.inactiveTabButtonLeft
          }
          onPress={() => props.handleClick()}
        ></Button>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title={"Register"}
          titleStyle={{ color: main }}
          buttonStyle={
            !props.active
              ? GeneralComponentsStylesheet.tabButtonRight
              : GeneralComponentsStylesheet.inactiveTabButtonRight
          }
          onPress={() => props.handleClick()}
        ></Button>
      </View>
    </View>
  );
};

export default TabComponent;
